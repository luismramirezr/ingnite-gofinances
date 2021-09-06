import React from 'react';
import isSameMonth from 'date-fns/isSameMonth';

import AS from 'app/utils/asyncStorage';
import useAsyncLayoutEffect from 'app/hook/useAsyncLayoutEffect';

import Header from 'app/components/ui/Header';
import Layout from 'app/components/ui/Layout';
import Typography from 'app/components/ui/Typography';

import * as S from './styles';
import Container from 'app/components/ui/Container';
import CategoryCard from './components/CategoryCard';

import type { CategoryType, Transaction } from 'app/types/models';

const Report: React.FC = () => {
  const [transactions, isFetching] = useAsyncLayoutEffect<Transaction[]>(
    [],
    undefined,
    async () => {
      const data = await AS.get<Transaction[]>('transactions');
      return data.filter(({ date }) => isSameMonth(new Date(), new Date(date)));
    }
  );

  const totalByCategory = React.useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => ({
          ...acc,
          [transaction.category]:
            (acc[transaction.category] || 0) + transaction.value,
        }),
        {} as { [key in CategoryType]: number }
      ),
    [transactions]
  );

  return (
    <Layout>
      <Header>
        <S.Container>
          <Typography variant="title">Resumo por categoria</Typography>
        </S.Container>
      </Header>
      <Container fullHeight>
        <S.List>
          {Object.entries(totalByCategory).map(([category, value]) => (
            <CategoryCard
              key={category}
              category={category as CategoryType}
              value={value}
            />
          ))}
        </S.List>
      </Container>
    </Layout>
  );
};

export default Report;
