import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const Button = styled(BorderlessButton)``;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: theme.rfValue(24),
  color: theme.palette.dark,
}))``;
