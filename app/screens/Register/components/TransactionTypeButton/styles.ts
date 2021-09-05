import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { PaletteColor } from 'app/theme/types';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(1, 0)};
`;

export interface ButtonProps extends RectButtonProps {
  active?: boolean;
  color: PaletteColor;
}

export const Button = styled(RectButton)<ButtonProps>`
  width: 49%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.palette.text};
  border-radius: ${({ theme }) => theme.radius(5)};
  padding: ${({ theme }) => theme.spacing(2)};

  ${({ active, color, theme }) =>
    active &&
    css`
      background-color: ${theme.palette[color]};
      border-color: transparent;
    `}
`;

export interface IconProps {
  color: PaletteColor;
}

export const Icon = styled(Feather)<IconProps>`
  font-size: ${({ theme }) => theme.rfValue(24)}px;
  margin-right: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme, color }) => theme.palette[color]};
`;
