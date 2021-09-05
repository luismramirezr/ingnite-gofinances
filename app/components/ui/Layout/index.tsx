import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import * as S from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <S.Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>{children}</View>
      </TouchableWithoutFeedback>
    </S.Container>
  );
};

export default Layout;
