import { Common } from '@/src/utils/tools/common';
import { Calendar } from '@/src/utils/tools/calendar';

export { Common };
export { Calendar };

interface Tools {
  common: Common;
  calendar: Calendar;
}

export const tools: Tools = {
  common: new Common(),
  calendar: new Calendar(),
};
