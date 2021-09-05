import React from 'react';
import { useFormContext } from 'react-hook-form';

import Typography from 'app/components/ui/Typography';
import ErrorMessage from 'app/components/ui/form/ErrorMessage';

import * as S from './styles';

const TransactionTypeButton: React.FC = () => {
  const { register, watch, setValue } = useFormContext();
  React.useEffect(() => {
    register('transactionType');
  }, [register]);

  const transactionType = watch('transactionType');

  const handlePress = (type: 'income' | 'outcome') => {
    setValue('transactionType', type, { shouldValidate: true });
  };

  return (
    <>
      <S.Container>
        <S.Button
          onPress={() => handlePress('income')}
          color="green_light"
          active={transactionType === 'income'}
        >
          <S.Icon name="arrow-up-circle" color="green" />
          <Typography
            fontSize={16}
            color={transactionType === 'income' ? 'title' : undefined}
          >
            Income
          </Typography>
        </S.Button>
        <S.Button
          onPress={() => handlePress('outcome')}
          color="red_light"
          active={transactionType === 'outcome'}
        >
          <S.Icon name="arrow-down-circle" color="red" />
          <Typography
            fontSize={16}
            color={transactionType === 'outcome' ? 'title' : undefined}
          >
            Outcome
          </Typography>
        </S.Button>
      </S.Container>
      <ErrorMessage name="transactionType" />
    </>
  );
};

export default TransactionTypeButton;
