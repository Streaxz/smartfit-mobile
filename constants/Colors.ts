/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export enum COLORS {
  TINT_COLOR_LIGHT = '#0a7ea4',
  TINT_COLOR_DARK = '#2c2828',
  BACK_BUTTON_BACKGROUND = '#f194ff',
  CARD_BACKGROUND = '#f5f5f5',
  DARK_BACKGROUND = '#52556A',
  WHITE = '#fff',
  BLACK = '#000',
  CLIENT_BUTTON_COLOR = '#2196F3',
  TRAINER_BUTTON_COLOR = '#dd3dfc',
  ORANGE = '#ED692A',
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
