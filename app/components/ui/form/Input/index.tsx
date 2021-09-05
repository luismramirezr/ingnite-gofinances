import React from 'react';
import { TextInputProps } from 'react-native';
import { Controller } from 'react-hook-form';

import ErrorMessage from 'app/components/ui/form/ErrorMessage';

import * as S from './styles';
export interface Props extends TextInputProps {
  name: string;
  uncontrolled?: boolean;
}

const Input: React.FC<Props> = ({ name, uncontrolled, ...props }) => {
  if (uncontrolled) return <S.Container {...props} />;

  return (
    <>
      <Controller
        render={({ field: { onChange, value } }) => (
          <S.Container onChangeText={onChange} value={value} {...props} />
        )}
        name={name}
      />
      <ErrorMessage name={name} />
    </>
  );
};

export default Input;
