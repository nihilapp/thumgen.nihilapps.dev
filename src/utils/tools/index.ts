import { Common } from '@/src/utils/tools/common';
import { Calendar } from '@/src/utils/tools/calendar';
import { ClientCookie } from '@/src/utils/tools/cookie';

export { Common };
export { Calendar };
export { ClientCookie };

interface Tools {
  common: Common;
  calendar: Calendar;
  cookie: ClientCookie;
}

export const tools: Tools = {
  common: new Common(),
  calendar: new Calendar(),
  cookie: new ClientCookie(),
};
