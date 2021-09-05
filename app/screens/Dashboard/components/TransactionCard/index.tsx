import React from 'react';
import { View } from 'react-native';
import format from 'date-fns/format';

import Typography from 'app/components/ui/Typography';

import { categories } from 'app/config/constants';
import type { Transaction } from 'app/types/models';

import * as S from './styles';

export type Props = Transaction;

const TransactionCard: React.FC<Props> = ({
  name,
  value,
  category,
  transactionType,
  date,
}) => {
  return (
    <S.Container>
      <View>
        <Typography color="title">{name}</Typography>
        <Typography
          fontSize={20}
          color={transactionType === 'income' ? 'green' : 'red'}
        >
          {(transactionType === 'outcome' ? -value : value).toLocaleString(
            'pt-BR',
            {
              style: 'currency',
              currency: 'BRL',
            }
          )}
        </Typography>
      </View>
      <S.Footer>
        <S.Category>
          <S.Icon name={categories[category].icon} />
          <Typography>{categories[category].name}</Typography>
        </S.Category>
        <Typography>{format(new Date(date), 'dd/MM/yyyy')}</Typography>
      </S.Footer>
    </S.Container>
  );
};

export default TransactionCard;
