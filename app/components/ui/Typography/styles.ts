import styled, { css } from 'styled-components/native';

import { Text } from 'react-native';

import type { TextProps } from 'react-native';
import type {
  FontFamily,
  PaletteColor,
  TypographyVariant,
} from 'app/theme/types';

export interface TypographyProps extends TextProps {
  variant: TypographyVariant;
  fontSize?: number;
  fontFamily?: FontFamily;
  color?: PaletteColor;
}

export const Typography = styled(Text)<TypographyProps>`
  ${({ theme, variant }) => theme.typography[variant]}

  ${({ fontFamily }) =>
    fontFamily &&
    css`
      font-family: ${({ theme }) => theme.typography.fonts[fontFamily]};
    `}

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${({ theme }) => theme.rfValue(fontSize)}px;
    `}

  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.palette[color]};
    `}
`;
