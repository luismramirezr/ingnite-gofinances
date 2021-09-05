import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage as Message } from '@hookform/error-message';

import Typography from 'app/components/ui/Typography';

import * as S from './styles';

export interface Props {
  name: string;
}

const ErrorMessage: React.FC<Props> = ({ name }) => {
  const {
    formState: { errors },
  } = useFormContext();

  if (!errors[name]) return null;

  return (
    <S.Container>
      <Typography color="red">
        <Message name={name} errors={errors} />
      </Typography>
    </S.Container>
  );
};

export default ErrorMessage;
