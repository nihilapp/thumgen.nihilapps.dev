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

export const dvwPlugin = plugin(({ matchUtilities, }: Plugin) => {
  matchUtilities({
    dvw: (value) => ({
      width: `${value}dvw`,
    }),
  }, {
    values: numberObj,
  });
});
