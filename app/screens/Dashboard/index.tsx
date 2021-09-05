import React from 'react';
import { View } from 'react-native';
import Layout from 'app/components/ui/Layout';
import Container from 'app/components/ui/Container';
import Header from 'app/components/ui/Header';
import Typography from 'app/components/ui/Typography';

import * as fixtures from 'app/fixtures/dashboard';

import * as S from './styles';

import HighlightCard from './components/HighlightCard';
import TransactionCard from './components/TransactionCard';

import type { Props as TransactionCardProps } from './components/TransactionCard';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Header height={278}>
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
            <S.LogoutButton>
              <S.Icon />
            </S.LogoutButton>
          </S.InfoBar>
        </Container>
        <S.HighlightCards>
          {fixtures.highlightCards.map(({ type, value, date }, i) => (
            <HighlightCard
              key={type}
              type={type}
              value={value}
              date={date}
              noMargin={i === fixtures.highlightCards.length - 1}
            />
          ))}
        </S.HighlightCards>
      </Header>
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
    </Layout>
  );
};

export default Dashboard;
