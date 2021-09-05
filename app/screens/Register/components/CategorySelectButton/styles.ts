import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.shape};
  border-radius: ${({ theme }) => theme.radius(5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-down',
  size: theme.rfValue(20),
  color: theme.palette.text,
}))``;
