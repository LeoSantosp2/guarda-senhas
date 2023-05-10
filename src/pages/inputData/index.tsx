import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'expo-status-bar';

import {
  Container,
  Header,
  View,
  Title,
  InputDataBox,
  Label,
  Input,
  Button,
  ButtonText,
} from './styled';

const InputDataPage = () => {
  const [service, setService] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const closePage = () => {
    navigation.navigate('Loading', {});

    setTimeout(() => {
      navigation.navigate('Home', {});
    }, 500);
  };

  const handleClickAdd = async () => {
    try {
      const data = {
        id: String(uuid.v4()),
        service: service,
        username: user,
        password: password,
      };

      const response = await AsyncStorage.getItem('@datas');

      const datas = response ? JSON.parse(response) : [];

      const newDatas = [...datas, data];

      await AsyncStorage.setItem('@datas', JSON.stringify(newDatas));

      setService('');
      setUser('');
      setPassword('');

      Keyboard.dismiss();

      Toast.show({
        type: 'success',
        text1: 'Dados adicionados com sucesso!',
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container>
          <Header>
            <Title>Insira as Informações</Title>
            <Icon
              name="close"
              size={25}
              color="#F20530"
              onPress={() => closePage()}
            />
          </Header>
          <View>
            <InputDataBox
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              <Label>Serviço:</Label>
              <Input value={service} onChangeText={setService} />
              <Label>Usuário:</Label>
              <Input value={user} onChangeText={setUser} />
              <Label>Senha:</Label>
              <Input value={password} onChangeText={setPassword} />

              <Button onPress={() => handleClickAdd()}>
                <ButtonText>Adicionar</ButtonText>
              </Button>
            </InputDataBox>
          </View>
        </Container>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </>
  );
};

export default InputDataPage;
