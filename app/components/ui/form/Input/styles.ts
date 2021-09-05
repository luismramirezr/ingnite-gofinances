import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
  ${({ theme }) => theme.typography.input}

  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.shape};
  border-radius: ${({ theme }) => theme.radius(5)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;
