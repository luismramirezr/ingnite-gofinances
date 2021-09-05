import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export interface Props {
  height?: number;
}

const Header: React.FC<Props> = ({ children, height }) => {
  return <S.Header height={height}>{children}</S.Header>;
};

export default Header;
