import React from 'react';
import { FlatList } from 'react-native';

import { categories, CategoryType } from 'app/config/constants';

import Typography from 'app/components/ui/Typography';

import * as S from './styles';
import Header from 'app/components/ui/Header';
import Button from 'app/components/ui/Button';
import Container from 'app/components/ui/Container';

export interface Props {
  category?: CategoryType;
  onSelect(category: CategoryType): void;
  onSave(): void;
}

const CategoryModal: React.FC<Props> = ({ category, onSelect, onSave }) => {
  return (
    <S.Content>
      <Header>
        <S.HeaderContent>
          <Typography variant="title">Categoria</Typography>
        </S.HeaderContent>
      </Header>
      <FlatList
        data={Object.values(categories)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.Category onPress={() => onSelect(item.id)}>
            <S.Icon
              active={category === item.id}
              name={item.icon}
              activeColor={item.color}
            />
            <Typography>{item.name}</Typography>
          </S.Category>
        )}
        ItemSeparatorComponent={() => <S.Separator />}
      />
      <Container>
        <Button title="Salvar" onPress={onSave} />
      </Container>
    </S.Content>
  );
};

export default CategoryModal;
