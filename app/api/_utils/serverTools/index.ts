import { Jwt } from '@/app/api/_utils/serverTools/jwt';
import { Calendar, Common } from '@/src/utils/tools';
import { Bcrypt } from '@/app/api/_utils/serverTools/bcrypt';

export interface Tools {
  common: Common;
  jwt: Jwt;
  calendar: Calendar;
  bcrypt: Bcrypt;
}

export const serverTools: Tools = {
  common: new Common(),
  jwt: new Jwt(),
  calendar: new Calendar(),
  bcrypt: new Bcrypt(),
};
