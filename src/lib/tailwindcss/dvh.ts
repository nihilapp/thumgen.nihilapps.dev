import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';

type Plugin = { matchUtilities : PluginAPI['matchUtilities'], theme : PluginAPI['theme'] };

const numberArray = Array
  .from({ length: 21, }, (_, i) => (
    `${i * 5}`
  ));

const numberObj = numberArray.reduce((pre, curr) => {
  pre[curr] = curr;

  return pre;
}, {});

export const dvhPlugin = plugin(({ matchUtilities, }: Plugin) => {
  matchUtilities({
    dvh: (value) => ({
      height: `${value}dvh`,
    }),
  }, {
    values: numberObj,
  });
});
