import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import * as S from './styles';

export interface Props {
  wrap?: boolean;
}

const Layout: React.FC<Props> = ({ wrap, children }) => {
  if (!wrap) return <S.Container>{children}</S.Container>;

  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>{children}</View>
      </TouchableWithoutFeedback>
    </S.Container>
  );
};

export default Layout;
