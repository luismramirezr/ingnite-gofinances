import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
`;

export const List = styled(ScrollView)`
  flex: 1;
`;
