import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import * as S from './styles';

const Loader: React.FC = () => {
  const theme = useTheme();
  return (
    <S.Container>
      <ActivityIndicator color={theme.palette.orange} />
    </S.Container>
  );
};

export default Loader;
