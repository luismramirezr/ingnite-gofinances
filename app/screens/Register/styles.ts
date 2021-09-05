import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3, 0)};
  justify-content: space-between;
`;
