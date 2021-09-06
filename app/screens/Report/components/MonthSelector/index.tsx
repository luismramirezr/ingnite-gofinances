import React from 'react';
import format from 'date-fns/format';
import addMonths from 'date-fns/addMonths';
import { ptBR } from 'date-fns/locale';

import Typography from 'app/components/ui/Typography';

import * as S from './styles';

export interface Props {
  date: string;
  setDate(date: string): void;
}

const MonthSelector: React.FC<Props> = ({ date, setDate }) => {
  const handleChangeDate = (action: 'prev' | 'next') => {
    const month = action === 'prev' ? -1 : 1;
    setDate(addMonths(new Date(date), month).toString());
  };

  return (
    <S.Container>
      <S.Button onPress={() => handleChangeDate('prev')}>
        <S.Icon name="chevron-left" />
      </S.Button>
      <Typography fontSize={20} color="dark">
        {format(new Date(date), 'MMMM, yyyy', { locale: ptBR })}
      </Typography>
      <S.Button onPress={() => handleChangeDate('next')}>
        <S.Icon name="chevron-right" />
      </S.Button>
    </S.Container>
  );
};

export default MonthSelector;
