import type { Props as HighlightCardProps } from 'app/screens/Dashboard/components/HighlightCard';
import type { Props as TransactionCardProps } from 'app/screens/Dashboard/components/TransactionCard';

export const highlightCards: HighlightCardProps[] = [
  {
    type: 'income',
    value: 17400,
    date: 'Última entrada dia 13 de abril',
  },
  {
    type: 'expense',
    value: 1259,
    date: 'Última saída dia 03 de abril',
  },
  {
    type: 'balance',
    value: 16141,
    date: '01 à 16 de abril',
  },
];

export const transactions: TransactionCardProps[] = [
  {
    title: 'Desenvolvimento de site',
    value: 12000,
    category: 'salary',
    date: '13/04/2020',
  },
  {
    title: 'Hamburgueria Pizzy',
    value: -59,
    category: 'food',
    date: '10/04/2020',
  },
  {
    title: 'Aluguel do apartamento',
    value: -1200,
    category: 'food',
    date: '27/03/2020',
  },
];
