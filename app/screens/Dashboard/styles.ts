import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';

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

export const LogoutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'power',
  size: theme.rfValue(24),
  color: theme.palette.orange,
}))``;

export const HighlightCards = styled.ScrollView.attrs(({ theme }) => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: theme.rfValue(24) },
}))`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(-4)};
`;

export const Transactions = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.spacing(2 + 4)};
`;

export const TransactionList = styled.FlatList`
  height: 100%;
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;
