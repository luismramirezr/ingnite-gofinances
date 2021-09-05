export interface Category {
  id: CategoryType;
  name: string;
  color: string;
  icon: string;
}

export type CategoryType =
  | 'purchases'
  | 'food'
  | 'salary'
  | 'car'
  | 'leisure'
  | 'studies';

export type TransactionType = 'income' | 'outcome';

export interface Transaction {
  id: string;
  name: string;
  value: number;
  category: CategoryType;
  transactionType: TransactionType;
  date: string;
}
