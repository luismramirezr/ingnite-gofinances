import Container from 'app/components/ui/Container';
import React from 'react';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <Container>
          <S.InfoBar>
            <S.User>
              <S.UserPhoto
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/48620427?v=4',
                }}
              />
              <S.UserInfo>
                <S.UserGreetings>Olá,</S.UserGreetings>
                <S.UserName>Luis</S.UserName>
              </S.UserInfo>
            </S.User>
            <S.Icon />
          </S.InfoBar>
        </Container>
      </S.Header>
    </S.Container>
  );
};

export default Dashboard;
