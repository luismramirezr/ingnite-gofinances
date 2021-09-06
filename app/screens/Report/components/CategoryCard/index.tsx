import React from 'react';

import getCategory from 'app/utils/getCategory';

import type { CategoryType } from 'app/types/models';

import * as S from './styles';
import Typography from 'app/components/ui/Typography';

export interface Props {
  category: CategoryType;
  value: number;
}

const CategoryCard: React.FC<Props> = ({ category: categoryName, value }) => {
  const category = getCategory(categoryName);
  return (
    <S.Container color={category.color}>
      <S.Content>
        <Typography fontSize={16}>{category.name}</Typography>
        <Typography color="title" fontFamily="bold" fontSize={16}>
          {value.toLocaleString('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
      </S.Content>
    </S.Container>
  );
};

export default CategoryCard;
