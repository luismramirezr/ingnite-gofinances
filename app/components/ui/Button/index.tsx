import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import Typography from 'app/components/ui/Typography';

import * as S from './styles';

export interface Props extends RectButtonProps {
  title: string;
  onPress(): void;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <S.Button {...rest}>
      <Typography variant="button">{title}</Typography>
    </S.Button>
  );
};

export default Button;
