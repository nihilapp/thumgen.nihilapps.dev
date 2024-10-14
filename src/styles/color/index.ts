import { amber } from '@/src/styles/color/color.amber';
import { black } from '@/src/styles/color/color.black';
import { blue } from '@/src/styles/color/color.blue';
import { cyan } from '@/src/styles/color/color.cyan';
import { emerald } from '@/src/styles/color/color.emerald';
import { fuchsia } from '@/src/styles/color/color.fuchsia';
import { gold } from '@/src/styles/color/color.gold';
import { gray } from '@/src/styles/color/color.gray';
import { green } from '@/src/styles/color/color.green';
import { pink } from '@/src/styles/color/color.pink';
import { indigo } from '@/src/styles/color/color.indigo';
import { lime } from '@/src/styles/color/color.lime';
import { neutral } from '@/src/styles/color/color.neutral';
import { orange } from '@/src/styles/color/color.orange';
import { sky } from '@/src/styles/color/color.sky';
import { red } from '@/src/styles/color/color.red';
import { rose } from '@/src/styles/color/color.rose';
import { royalBlue } from '@/src/styles/color/color.rotal-blue';
import { paleSky } from '@/src/styles/color/color.pale-sky';
import { hotPink } from '@/src/styles/color/color.hot-pink';
import { purple } from '@/src/styles/color/color.purple';
import { slate } from '@/src/styles/color/color.slate';
import { teal } from '@/src/styles/color/color.teal';
import { stone } from '@/src/styles/color/color.stone';
import { violet } from '@/src/styles/color/color.violet';
import { yellow } from '@/src/styles/color/color.yellow';
import { zinc } from '@/src/styles/color/color.zinc';

export const color = {
  amber,
  black,
  blue,
  cyan,
  emerald,
  fuchsia,
  gold,
  gray,
  green,
  hotPink,
  indigo,
  lime,
  neutral,
  orange,
  paleSky,
  pink,
  purple,
  red,
  rose,
  royalBlue,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc,
  white: '#FFFFFF',
  custom(code: string) {
    return `#${code}`;
  },
};
