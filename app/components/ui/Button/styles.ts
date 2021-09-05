import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Button = styled(RectButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.orange};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.radius(5)};
  align-items: center;
`;
