import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type CommonState = {
  darkMode: boolean;
  mainColor: string;
};

export const commonStore = create(
  persist<CommonState>(
    () => ({
      darkMode: false,
      mainColor: '',
    }),
    {
      name: 'project/common-state',
      skipHydration: true,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function setDarkMode(value: boolean) {
  commonStore.setState({
    darkMode: value,
  });
}
