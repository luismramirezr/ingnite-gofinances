import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';

import { CategoryType } from 'app/config/constants';

export interface FormSchema {
  name: string;
  price: string;
  transactionType: 'income' | 'outcome';
  category: CategoryType;
}

Yup.setLocale(ptForm);

export const resolver = Yup.object({
  name: Yup.string().required(),
  price: Yup.number()
    .transform((_, v) => Number(v.replace(/,/, '.')))
    .positive()
    .required(),
  transactionType: Yup.string().required(),
  category: Yup.string().required(),
});
