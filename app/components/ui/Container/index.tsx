import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export interface Props {
  fullHeight?: boolean;
}

const Container: React.FC<Props> = ({ fullHeight, children }) => {
  return <S.Container fullHeight={fullHeight}>{children}</S.Container>;
};

export default Container;
