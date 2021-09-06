import React from 'react';
import { View } from 'react-native';

import isSameMonth from 'date-fns/isSameMonth';

import getHightlightCardsData from 'app/utils/getHighlightCardsData';

import AS from 'app/utils/asyncStorage';
import useAsyncLayoutEffect from 'app/hook/useAsyncLayoutEffect';

import Layout from 'app/components/ui/Layout';
import Container from 'app/components/ui/Container';
import Header from 'app/components/ui/Header';
import Typography from 'app/components/ui/Typography';

import type { Transaction } from 'app/types/models';

import * as S from './styles';

import HighlightCard from './components/HighlightCard';
import TransactionCard from './components/TransactionCard';

import type { Props as HighlightCardProps } from './components/HighlightCard';

const Dashboard: React.FC = () => {
  const [transactions, isFetching] = useAsyncLayoutEffect<Transaction[]>(
    [],
    undefined,
    async () => {
      const data = await AS.get<Transaction[]>('transactions');
      return data
        .filter(({ date }) => isSameMonth(new Date(), new Date(date)))
        .reverse();
    }
  );

  const highlightCards: HighlightCardProps[] = React.useMemo(
    () => getHightlightCardsData(transactions),
    [transactions.length]
  );

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
          {!isFetching &&
            highlightCards.map(({ type, value, date, noMargin }) => (
              <HighlightCard
                key={type}
                type={type}
                value={value}
                date={date}
                noMargin={noMargin}
              />
            ))}
        </S.HighlightCards>
      </Header>
      <Container fullHeight>
        <S.Transactions>
          <Typography fontSize={18} color="dark">
            Listagem
          </Typography>
          {!isFetching && (
            <S.TransactionList
              data={transactions}
              keyExtractor={(item: Transaction) => item.id}
              renderItem={({ item }) => (
                <TransactionCard {...(item as Transaction)} />
              )}
            />
          )}
        </S.Transactions>
      </Container>
    </Layout>
  );
};

export default Dashboard;
