export const ASYNC_STORAGE_KEY = '@gofinances';

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

export const categories: { [key in CategoryType]: Category } = {
  purchases: {
    id: 'purchases',
    name: 'Compras',
    icon: 'shopping-bag',
    color: '#5636D3',
  },
  food: { id: 'food', name: 'Alimentação', icon: 'coffee', color: '#FF872C' },
  salary: {
    id: 'salary',
    name: 'Salário',
    icon: 'dollar-sign',
    color: '#12A454',
  },
  car: { id: 'car', name: 'Carro', icon: 'crosshair', color: '#E83F5B' },
  leisure: { id: 'leisure', name: 'Lazer', icon: 'heart', color: '#26199F' },
  studies: { id: 'studies', name: 'Estudos', icon: 'book', color: '#9C001A' },
};
