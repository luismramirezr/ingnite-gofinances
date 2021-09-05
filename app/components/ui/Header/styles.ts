import styled from 'styled-components/native';

export interface HeaderProps {
  height?: number;
}

export const Header = styled.View<HeaderProps>`
  width: 100%;
  height: ${({ theme, height }) => theme.rfValue(height || 115)}px;
  background-color: ${({ theme }) => theme.palette.blue};

  align-items: center;
`;
