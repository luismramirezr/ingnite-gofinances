import React from 'react';
import { View } from 'react-native';

import Typography from 'app/components/ui/Typography';

import { categories } from 'app/config/constants';
import type { CategoryType } from 'app/config/constants';

import * as S from './styles';

export interface Props {
  title: string;
  value: number;
  category: CategoryType;
  date: string;
}

const TransactionCard: React.FC<Props> = ({ title, value, category, date }) => {
  return (
    <S.Container>
      <View>
        <Typography color="title">{title}</Typography>
        <Typography fontSize={20} color={value >= 0 ? 'green' : 'red'}>
          {value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
      </View>
      <S.Footer>
        <S.Category>
          <S.Icon name={categories[category].icon} />
          <Typography>{categories[category].name}</Typography>
        </S.Category>
        <Typography>{date}</Typography>
      </S.Footer>
    </S.Container>
  );
};

export default TransactionCard;
