import format from 'date-fns/format';
import { ptBR } from 'date-fns/locale';

import type { Props as HighlightCardProps } from 'app/screens/Dashboard/components/HighlightCard';

import type { Transaction } from 'app/types/models';

const getHightlightCardsData = (
  transactions: Transaction[]
): HighlightCardProps[] => {
  const incomeTransactions = transactions.filter(
    ({ transactionType }) => transactionType === 'income'
  );
  const outcomeTransactions = transactions.filter(
    ({ transactionType }) => transactionType === 'outcome'
  );

  const totalIncome = incomeTransactions.reduce(
    (acc: number, transaction: Transaction) => acc + transaction.value,
    0
  );
  const totalOutcome = outcomeTransactions.reduce(
    (acc: number, transaction: Transaction) => acc + transaction.value,
    0
  );

  const lastIncome = incomeTransactions.pop();
  const lastOutcome = outcomeTransactions.pop();

  const dateRange = `01 à ${format(new Date(), "dd 'de' MMMM", {
    locale: ptBR,
  })}`;

  return [
    {
      type: 'income',
      value: totalIncome,
      date:
        lastIncome?.date &&
        `Última entrada dia ${format(
          new Date(lastIncome.date),
          "dd 'de' MMMM",
          {
            locale: ptBR,
          }
        )}`,
    },
    {
      type: 'expense',
      value: totalOutcome,
      date:
        lastOutcome?.date &&
        `Última saída dia ${format(new Date(lastOutcome.date), "dd 'de' MMMM", {
          locale: ptBR,
        })}`,
    },
    {
      type: 'balance',
      value: totalIncome - totalOutcome,
      date: dateRange,
      noMargin: true,
    },
  ];
};

export default getHightlightCardsData;
