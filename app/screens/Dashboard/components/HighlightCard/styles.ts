import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import type { PaletteColor } from 'app/theme/types';

export interface ContainerProps {
  backgroundColor: PaletteColor;
  noMargin: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${({ theme }) => theme.rfValue(300)}px;
  min-height: ${({ theme }) => theme.rfValue(200)}px;

  background-color: ${({ theme, backgroundColor }) =>
    theme.palette[backgroundColor]};
  border-radius: ${({ theme }) => theme.radius(5)};
  padding: ${({ theme }) => theme.spacing(2, 3, 4, 3)};
  margin-right: ${({ noMargin, theme }) => theme.spacing(noMargin ? 0 : 2)};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: theme.rfValue(40),
}))``;
