import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.rfValue(128)}px;

  background-color: ${({ theme }) => theme.palette.shape};
  border-radius: ${({ theme }) => theme.radius(5)};
  padding: ${({ theme }) => theme.spacing(2, 3)};
  margin: ${({ theme }) => theme.spacing(1, 0)};

  justify-content: space-between;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: theme.rfValue(20),
  color: theme.palette.text,
}))`
  margin-right: ${({ theme }) => theme.spacing(1)};
`;
