import React from 'react';
import { View } from 'react-native';

import Typography from 'app/components/ui/Typography';

import * as S from './styles';

const labelMap = {
  income: 'Entradas',
  expense: 'Saídas',
  balance: 'Total',
};

const iconPropsMap = {
  income: { name: 'arrow-up-circle', color: 'green' },
  expense: { name: 'arrow-down-circle', color: 'red' },
  balance: { name: 'dollar-sign', color: 'white' },
};

export interface Props {
  type: 'income' | 'expense' | 'balance';
  value: string;
  date: string;
  noMargin?: boolean;
}

const HighlightCard: React.FC<Props> = ({ type, value, date, noMargin }) => {
  return (
    <S.Container
      backgroundColor={type === 'balance' ? 'orange' : 'shape'}
      noMargin={noMargin}
    >
      <S.Header>
        <Typography
          color={type === 'balance' ? 'shape' : 'title'}
          fontSize={14}
        >
          {labelMap[type]}
        </Typography>
        <S.Icon {...iconPropsMap[type]} />
      </S.Header>
      <View>
        <Typography
          fontFamily="medium"
          fontSize={32}
          color={type === 'balance' ? 'shape' : 'title'}
        >
          {value}
        </Typography>
        <Typography fontSize={12} color={type === 'balance' ? 'shape' : 'text'}>
          {date}
        </Typography>
      </View>
    </S.Container>
  );
};

export default HighlightCard;
