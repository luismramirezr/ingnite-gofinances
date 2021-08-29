import React from 'react';

import type { TextProps } from 'react-native';
import type {
  FontFamily,
  PaletteColor,
  TypographyVariant,
} from 'app/theme/types';

import * as S from './styles';

export interface Props extends TextProps {
  variant?: TypographyVariant;
  fontSize?: number;
  fontFamily?: FontFamily;
  color?: PaletteColor;
}

const Typography: React.FC<Props> = ({ variant = 'body', ...props }) => {
  return <S.Typography variant={variant} {...props} />;
};

export default Typography;
