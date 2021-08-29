import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.palette.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.rfValue(278)}px;
  background-color: ${({ theme }) => theme.palette.blue};

  align-items: center;
`;

export const InfoBar = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.rfValue(getStatusBarHeight() + 28)}px;
`;

export const User = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  width: ${({ theme }) => theme.rfValue(48)}px;
  height: ${({ theme }) => theme.rfValue(48)}px;
  border-radius: ${({ theme }) => theme.radius(5)};
  margin-right: ${({ theme }) => theme.spacing(2)};
`;

export const UserInfo = styled.View``;

export const UserGreetings = styled.Text`
  font-family: ${({ theme }) => theme.typography.fonts.regular};
  font-size: ${({ theme }) => theme.rfValue(18)}px;
  color: ${({ theme }) => theme.palette.shape};
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.typography.fonts.bold};
  font-size: ${({ theme }) => theme.rfValue(18)}px;
  color: ${({ theme }) => theme.palette.shape};
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'power',
  size: theme.rfValue(24),
  color: theme.palette.orange,
}))``;
