import React from 'react';
import { View } from 'react-native';
import Container from 'app/components/ui/Container';
import Typography from 'app/components/ui/Typography';

import * as fixtures from 'app/fixtures/dashboard';

import * as S from './styles';

import HighlightCard from './components/HighlightCard';
import TransactionCard from './components/TransactionCard';

import type { Props as TransactionCardProps } from './components/TransactionCard';

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
              <View>
                <Typography fontSize={18} color="shape">
                  Olá,
                </Typography>
                <Typography fontFamily="bold" fontSize={18} color="shape">
                  Luis
                </Typography>
              </View>
            </S.User>
            <S.Icon />
          </S.InfoBar>
        </Container>
        <S.HighlightCards>
          {fixtures.highlightCards.map(({ type, value, date }) => (
            <HighlightCard key={type} type={type} value={value} date={date} />
          ))}
        </S.HighlightCards>
      </S.Header>
      <Container fullHeight>
        <S.Transactions>
          <Typography fontSize={18} color="dark">
            Listagem
          </Typography>
          <S.TransactionList
            data={fixtures.transactions}
            keyExtractor={(item: TransactionCardProps) => item.title}
            renderItem={({ item }) => (
              <TransactionCard {...(item as TransactionCardProps)} />
            )}
          />
        </S.Transactions>
      </Container>
    </S.Container>
  );
};

export default Dashboard;
