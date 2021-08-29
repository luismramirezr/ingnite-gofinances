import { css } from 'styled-components';

import type {
  FlattenInterpolation,
  ThemeProps,
  DefaultTheme,
} from 'styled-components';

import type { FontFamily, TypographyVariant } from './types';

export const fonts: {
  [key in FontFamily]: string;
} = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  bold: 'Poppins_700Bold',
};

const typography: {
  [key in TypographyVariant]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
} = {
  body: css`
    font-family: ${fonts.regular};
    font-size: ${({ theme }) => theme.rfValue(14)}px;
    color: ${({ theme }) => theme.palette.text};
  `,
};

export default typography;
