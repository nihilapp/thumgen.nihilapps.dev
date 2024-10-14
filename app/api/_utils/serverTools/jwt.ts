import { cookies } from 'next/headers';
import { User } from '@prisma/client';
import { SignJWT, jwtVerify } from 'jose';
import { CreateToken, TokenInfo, TokenMode } from '@/src/entities';
import { serverTools } from '@/app/api/_utils/serverTools/index';
import { DB } from '@/src/utils';

export class Jwt {
  // 토큰 모드에 따라 적절한 시크릿 키를 설정
  private setSecret(mode: TokenMode) {
    const secret = mode === 'accessToken'
      ? process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
      : process.env.NEXT_PUBLIC_REFRESH_TOKEN_SECRET;

    return secret;
  }

  // 새로운 토큰을 생성
  public async genToken(
    mode: TokenMode,
    user: User
  ): Promise<CreateToken> {
    const {
      uid, email, name, role,
    } = user;
    const secret = new TextEncoder().encode(this.setSecret(mode));

    const token = await new SignJWT({
      uid, email, name, role,
    })
      .setProtectedHeader({ alg: 'HS256', })
      .setExpirationTime(mode === 'accessToken'
        ? process.env.NEXT_PUBLIC_ACCESS_TOKEN_EXPIRATION
        : process.env.NEXT_PUBLIC_REFRESH_TOKEN_EXPIRATION)
      .sign(secret);

    const info = await this.tokenInfo(mode, token);

    return {
      token,
      exp: info.exp,
    };
  }

  // 토큰 정보를 해독하여 반환
  public async tokenInfo(mode: TokenMode, token: string) {
    const secret = new TextEncoder().encode(this.setSecret(mode));

    const { payload, } = await jwtVerify(token, secret, {
      algorithms: [ 'HS256', ],
    });

    return payload as unknown as TokenInfo;
  }

  // 토큰의 만료 시간을 확인
  public expCheck(tokenInfo: TokenInfo) {
    const now = Math.floor(Date.now() / 1000);
    const diff = Math.floor(tokenInfo.exp) - now;

    return diff;
  }

  // 토큰의 상태를 확인 (유효 여부)
  public async tokenStatus(mode: TokenMode, token: string) {
    const tokenInfo = await this.tokenInfo(
      mode,
      token
    );

    const diff = this.expCheck(tokenInfo);

    return !(diff < 180);
  }

  // 쿠키의 토큰과 DB의 토큰을 비교
  public async compareToken(uid: string) {
    const tokenCookieString = cookies().get('session').value;
    const tokenCookie = serverTools.common
      .parse<CreateToken>(tokenCookieString);

    const user = await DB.users().findFirst({
      where: {
        uid,
      },
    });

    return user.accessToken === tokenCookie.token;
  }

  // 인증되지 않은 응답을 생성
  private unauthorizedResponse(message: string) {
    return {
      resData: null,
      status: 401,
      message,
    };
  }

  // UID로 사용자를 찾음
  private async findUserByUid(uid: string) {
    return DB.users().findFirst({ where: { uid, }, });
  }

  // 사용자가 로그아웃을 직접하지 않았을 때에 페이지 전환시마다 이 메소드가 실행.
  public async tokenRefresh(user: User) {
    // 로그인 상태, UID, 세션 쿠키 확인
    const { isSignedIn, uid, sessionCookie, } = this.getLoginStatus();

    // 로그인 상태가 아니고 세션 쿠키도 없는 경우
    if (!isSignedIn && !sessionCookie) {
      return this.unauthorizedResponse('로그인이 되어있지 않습니다.');
    }

    // UID로 사용자 정보 조회
    const findUser = await this.findUserByUid(uid);
    if (!findUser) {
      return this.unauthorizedResponse('사용자를 찾을 수 없습니다.');
    }

    // 로그인 상태이지만 세션 쿠키가 없는 경우 (토큰 만료 가능성)
    if (isSignedIn && !sessionCookie) {
      return this.handleExpiredToken(user);
    }

    // 액세스 토큰과 리프레시 토큰 상태 확인
    const { accessToken, refreshToken, } = await this.getTokens(findUser);
    const accessTokenStatus = await this.tokenStatus('accessToken', accessToken);
    const refreshTokenStatus = await this.tokenStatus('refreshToken', refreshToken);

    // 액세스 토큰이 만료된 경우
    if (!accessTokenStatus) {
      // 리프레시 토큰도 만료된 경우
      if (!refreshTokenStatus) {
        return this.handleExpiredRefreshToken();
      }
      // 리프레시 토큰이 유효한 경우, 새 액세스 토큰 발급
      return this.issueNewAccessToken(user);
    }

    // 토큰이 유효한 경우, 사용자 역할 검증
    return this.validateUserRole(user, findUser);
  }

  // 로그인 상태를 확인
  private getLoginStatus() {
    const isSignedIn = !!+cookies().get('isSignedIn').value;
    const uid = cookies().get('uid')?.value;
    const sessionCookie = cookies().get('session')?.value;
    return { isSignedIn, uid, sessionCookie, };
  }

  // 사용자의 액세스 토큰과 리프레시 토큰을 가져옴
  private async getTokens(user: User) {
    const { refreshToken, } = await DB.refreshTokens().findFirst({
      where: { userId: user.id, },
    });
    return { accessToken: user.accessToken, refreshToken, };
  }

  // 만료된 토큰을 처리
  private async handleExpiredToken(user: User) {
    return this.issueNewAccessToken(user);
  }

  // 새로운 액세스 토큰을 발급
  private async issueNewAccessToken(user: User) {
    const newAccessToken = await this.genToken('accessToken', user);
    const newAccessTokenInfo = await this.tokenInfo('accessToken', newAccessToken.token);

    this.setSessionCookie(newAccessToken.token, newAccessTokenInfo.exp);

    const updatedUser = await this.updateUserToken(user.uid, newAccessToken.token, newAccessTokenInfo.exp);

    return {
      resData: updatedUser,
      status: 200,
      message: '새로운 액세스 토큰이 발급되었습니다.',
    };
  }

  // 세션 쿠키를 설정
  private setSessionCookie(token: string, exp: number) {
    cookies().set('session', serverTools.common.string({ token, exp, }), {
      secure: true,
      path: '/',
      httpOnly: true,
      expires: new Date(exp * 1000),
    });
  }

  // 사용자의 토큰 정보를 업데이트
  private async updateUserToken(uid: string, token: string, exp: number) {
    return DB.users().update({
      where: { uid, },
      data: { accessToken: token, exp, },
    });
  }

  // 만료된 리프레시 토큰을 처리
  private async handleExpiredRefreshToken() {
    this.clearAllCookies();
    return this.unauthorizedResponse('리프레시 토큰이 만료되었습니다. 다시 로그인 해주세요.');
  }

  // 모든 쿠키를 제거
  private clearAllCookies() {
    cookies().set('session', '', { expires: new Date(0), });
    cookies().set('isSignedIn', '0', { expires: new Date('9999-12-31'), });
    cookies().set('uid', '', { expires: new Date(0), });
  }

  // 사용자 역할을 검증
  private async validateUserRole(user: User, findUser: User) {
    if (user.role !== 'ADMIN' && process.env.NODE_ENV !== 'development') {
      const compareToken = await this.compareToken(user.uid);
      if (!compareToken) {
        return this.unauthorizedResponse('인증 정보가 일치하지 않습니다.');
      }
    }
    return {
      resData: findUser,
      status: 200,
      message: '토큰 상태가 정상입니다.',
    };
  }
}
