import * as Yup from 'yup';
import { ptForm } from 'yup-locale-pt';

import type { CategoryType, TransactionType } from 'app/types/models';

export interface FormSchema {
  name: string;
  value: string;
  transactionType: TransactionType;
  category: CategoryType;
}

Yup.setLocale(ptForm);

export const resolver = Yup.object({
  name: Yup.string().required(),
  value: Yup.number()
    .transform((_, v) => Number(v.replace(/,/, '.')))
    .positive()
    .required(),
  transactionType: Yup.string().required(),
  category: Yup.string().required(),
});
