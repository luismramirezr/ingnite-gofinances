import styled, { css } from 'styled-components/native';

export interface ContainerProps {
  fullHeight?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(0, 3)};

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      flex: 1;
    `}
`;
