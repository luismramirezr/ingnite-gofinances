import React from 'react';
import uuid from 'react-native-uuid';
import { View, Modal, Alert } from 'react-native';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import AS from 'app/utils/asyncStorage';

import Header from 'app/components/ui/Header';
import Layout from 'app/components/ui/Layout';
import Container from 'app/components/ui/Container';
import Typography from 'app/components/ui/Typography';
import Button from 'app/components/ui/Button';
import Input from 'app/components/ui/form/Input';

import { CategoryType } from 'app/config/constants';

import TransactionTypeButton from './components/TransactionTypeButton';
import CategorySelectButton from './components/CategorySelectButton';

import * as S from './styles';
import CategoryModal from './components/CategoryModal';
import { FormSchema, resolver } from './form';

const Register: React.FC = () => {
  const navigator = useNavigation<{ navigate: (screen: string) => void }>();
  const [openCategoryModal, setOpenCategoryModal] = React.useState(false);
  const formMethods = useForm<FormSchema>({ resolver: yupResolver(resolver) });

  const category = formMethods.watch('category');

  const handleOpenCategoryModal = () => {
    setOpenCategoryModal(true);
  };

  const handleSaveCategory = () => {
    setOpenCategoryModal(false);
  };

  const handleSelectCategory = (type: CategoryType) => {
    formMethods.setValue('category', type, { shouldValidate: true });
  };

  const handleSubmit = async (form: FormSchema) => {
    try {
      const id = uuid.v4();
      const date = new Date();
      const saveStatus = await AS.pushToArray('transactions', {
        ...form,
        id,
        date,
      });
      if (!saveStatus) throw new Error('Erro ao salvar transação');
      formMethods.reset();
      navigator.navigate('dashboard');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro ao salvar transação');
    }
  };

  React.useEffect(() => {
    formMethods.register('category');
  }, [formMethods.register]);

  return (
    <Layout>
      <Header>
        <S.Container>
          <Typography variant="title">Cadastro</Typography>
        </S.Container>
      </Header>
      <Container fullHeight>
        <FormProvider {...formMethods}>
          <S.Form>
            <View>
              <Input
                name="name"
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
              />
              <Input name="price" placeholder="Preço" keyboardType="numeric" />
              <TransactionTypeButton />
              <CategorySelectButton
                category={category}
                onPress={handleOpenCategoryModal}
              />
            </View>
            <Button
              title="Enviar"
              onPress={formMethods.handleSubmit(handleSubmit)}
            />
          </S.Form>
          <Modal visible={openCategoryModal}>
            <CategoryModal
              category={category}
              onSelect={handleSelectCategory}
              onSave={handleSaveCategory}
            />
          </Modal>
        </FormProvider>
      </Container>
    </Layout>
  );
};

export default Register;
