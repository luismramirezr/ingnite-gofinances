import React from 'react';
import isSameMonth from 'date-fns/isSameMonth';
import { useTheme } from 'styled-components';

import AS from 'app/utils/asyncStorage';
import useAsyncLayoutEffect from 'app/hook/useAsyncLayoutEffect';

import { VictoryPie } from 'victory-native';

import Header from 'app/components/ui/Header';
import Layout from 'app/components/ui/Layout';
import Typography from 'app/components/ui/Typography';
import Loader from 'app/components/ui/Loader';

import * as S from './styles';
import Container from 'app/components/ui/Container';
import CategoryCard from './components/CategoryCard';

import type { CategoryType, Transaction } from 'app/types/models';
import getCategory from 'app/utils/getCategory';
import MonthSelector from './components/MonthSelector';

const Report: React.FC = () => {
  const theme = useTheme();
  const [currentDate, setCurrentDate] = React.useState(new Date().toString());

  const [transactions, isFetching] = useAsyncLayoutEffect<Transaction[]>(
    [],
    [currentDate],
    async ([newDate]) => {
      const data = await AS.get<Transaction[]>('transactions');
      return data
        .filter(({ date }) => isSameMonth(new Date(newDate), new Date(date)))
        .filter(({ transactionType }) => transactionType === 'outcome');
    }
  );

  const handleChangeDate = (newDate: string) => {
    setCurrentDate(newDate);
  };

  const totalOutcome = React.useMemo(
    () => transactions.reduce((acc, { value }) => acc + value, 0),
    [transactions]
  );

  const totalByCategory = React.useMemo(
    () =>
      transactions.reduce((acc, transaction) => {
        const total =
          (acc[transaction.category]?.total || 0) + transaction.value;
        const percentage = total / totalOutcome;

        return {
          ...acc,
          [transaction.category]: {
            total,
            percentage,
            color: getCategory(transaction.category).color,
          },
        };
      }, {} as { [key in CategoryType]: { total: number; percentage: number; color: string } }),
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
        <MonthSelector date={currentDate} setDate={handleChangeDate} />
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <S.ChartContainer>
              <VictoryPie
                height={theme.rfValue(325)}
                data={Object.entries(totalByCategory).map(
                  ([_, { percentage, total }]) => ({
                    x: `${Number((percentage * 100).toFixed(2)).toLocaleString(
                      'pt-Br'
                    )}%`,
                    y: total,
                  })
                )}
                colorScale={Object.values(totalByCategory).map(
                  ({ color }) => color
                )}
                style={{
                  labels: {
                    fontSize: theme.rfValue(15),
                    fill: theme.palette.shape,
                  },
                }}
                labelRadius={50}
              />
            </S.ChartContainer>
            <S.List>
              {Object.entries(totalByCategory).map(([category, { total }]) => (
                <CategoryCard
                  key={category}
                  category={category as CategoryType}
                  value={total}
                />
              ))}
            </S.List>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Report;
