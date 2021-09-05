import React from 'react';

import Typography from 'app/components/ui/Typography';
import ErrorMessage from 'app/components/ui/form/ErrorMessage';

import * as S from './styles';
import { categories, CategoryType } from 'app/config/constants';

export interface Props {
  category?: CategoryType;
  onPress(): void;
}

const CategorySelectButton: React.FC<Props> = ({ category, ...rest }) => {
  return (
    <>
      <S.Container {...rest}>
        <Typography>
          {category ? categories[category].name : 'Categoria'}
        </Typography>
        <S.Icon />
      </S.Container>
      <ErrorMessage name="category" />
    </>
  );
};

export default CategorySelectButton;
