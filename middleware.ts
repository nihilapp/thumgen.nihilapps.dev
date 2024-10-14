import { cookies } from 'next/headers';
import { CreateToken } from '@/src/entities';
import { serverTools } from '@/app/api/_utils/serverTools';

export function middleware() {
  const session = cookies().get('session');

  if (!session) {
    return;
  }
}
