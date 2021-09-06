import styled from 'styled-components/native';

export interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.palette.shape};
  border-radius: ${({ theme }) => theme.radius(5)};
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2)};
`;
