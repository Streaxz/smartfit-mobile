/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export enum COLORS {
  TINT_COLOR_LIGHT = '#0a7ea4',
  TINT_COLOR_DARK = '#2c2828',
  DARK_WHITE = '#D1D4DE',
  LIGHT_GRAY = '#52556A',
  GRAY = '#33374C',
  DARK_GRAY = '#202439',
  BACK_BUTTON_BACKGROUND = '#f194ff',
  LIGHT_ORANGE = '#FFAD85',
  ORANGE = '#EA8A5C',
  DARK_ORANGE = '#ED692A',
  YELLOW = '#F0A81B',
  GREEN = '#24E766',
  RED = '#E63219',
  CARD_BACKGROUND = '#EFF1F9',
  WHITE = '#fff',
  BLACK = '#000',
  CLIENT_BUTTON_COLOR = '#2196F3',
  TRAINER_BUTTON_COLOR = '#dd3dfc',

  BLACK_100 = '#202439',
  BLACK_200 = '#33374C',
  BLACK_300 = '#52556A',

  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  PRIMARY_100 = '#ED692A',
  PRIMARY_200 = '#EA8A5C',
  PRIMARY_300 = '#FFAD85',

  WHITE_100 = '#FFFFFF',
  WHITE_200 = '#EFF1F9',
  WHITE_300 = '#D1D4DE',

  ERROR = '#E63219',
}

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: COLORS.TINT_COLOR_LIGHT,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: COLORS.TINT_COLOR_LIGHT,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: COLORS.TINT_COLOR_DARK,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: COLORS.TINT_COLOR_DARK,
  },
};
