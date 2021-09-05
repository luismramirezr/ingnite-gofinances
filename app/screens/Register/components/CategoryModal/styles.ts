import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';

export const Content = styled.View`
  flex: 1;
  padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const HeaderContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${getStatusBarHeight()}px;
`;

export const Category = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2, 4)};
`;

export const Separator = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.rfValue(1)}px;
  background-color: ${({ theme }) => theme.palette.text};
`;

export interface IconProps {
  active: boolean;
  activeColor: string;
}

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: theme.rfValue(20),
}))<IconProps>`
  margin-right: ${({ theme }) => theme.spacing(2)};

  ${({ active, activeColor }) =>
    active &&
    css`
      color: ${activeColor};
    `}
`;
