import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { Modal } from 'react-native';

import {
  Container,
  View,
  ViewDatas,
  ViewIcon,
  Text,
  ViewEdit,
  ViewInput,
  ViewInputHeader,
  Label,
  Input,
  Button,
  ButtonText,
} from './styled';

import { ContainerDatasProps } from '../interfaces/containerDatasProps';

const ContanerDatas = ({
  id,
  service,
  username,
  password,
}: ContainerDatasProps) => {
  const [editedService, setEditedService] = useState('');
  const [editedUser, setEditedUser] = useState('');
  const [editedPassword, setEditedPassword] = useState('');
  const [edit, setEdit] = useState(false);

  const navigation = useNavigation();

  const handleEdit = async (id: string) => {
    try {
      const response = await AsyncStorage.getItem('@datas');

      const datas = JSON.parse(response);

      datas.map((item) => {
        if (item.id === id) {
          setEditedService(item.service);
          setEditedUser(item.username);
          setEditedPassword(item.password);
        }
      });

      setEdit(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveEdit = async (id: string) => {
    try {
      const response = await AsyncStorage.getItem('@datas');

      const datas = JSON.parse(response);

      datas.map((item) => {
        if (
          (item.id === id && item.service !== editedService) ||
          (item.id === id && item.username !== editedUser) ||
          (item.id === id && item.password !== editedPassword)
        ) {
          setEdit(false);

          navigation.navigate('Loading', {});

          setTimeout(() => {
            navigation.navigate('Home', {});

            Toast.show({
              type: 'success',
              text1: 'Dados atualizados com sucesso!',
            });
          }, 500);
        } else {
          setEdit(false);
        }
      });

      datas.map((item) => {
        if (item.id === id) {
          item.service = editedService;
          item.username = editedUser;
          item.password = editedPassword;
        }
      });

      await AsyncStorage.setItem('@datas', JSON.stringify(datas));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await AsyncStorage.getItem('@datas');

      const datas = JSON.parse(response);

      datas.map((item) => {
        if (item.id === id) {
          datas.splice(datas.indexOf(item), 1);
        }
      });

      await AsyncStorage.setItem('@datas', JSON.stringify(datas));

      navigation.navigate('Loading', {});

      setTimeout(() => {
        navigation.navigate('Home', {});

        Toast.show({
          type: 'success',
          text1: 'Dados deletados com sucesso!',
        });
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = () => {
    setEdit(false);
  };

  return (
    <Container>
      <View>
        <ViewDatas
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text>{service}</Text>
          <ViewIcon>
            <Icon
              name="pencil"
              size={22}
              color="#020B26"
              style={{ marginRight: 10 }}
              onPress={() => handleEdit(id)}
            />
            <Icon
              name="trash-can"
              size={22}
              color="#F20530"
              onPress={() => handleDelete(id)}
            />
          </ViewIcon>
        </ViewDatas>

        <ViewDatas>
          <Text>Usuário: {username}</Text>
          <Text>Senha: {password}</Text>
        </ViewDatas>
      </View>

      <Modal visible={edit} transparent={true} animationType="slide">
        <ViewEdit>
          <ViewInput>
            <ViewInputHeader>
              <Icon
                name="close"
                size={28}
                color="#F2F2F2"
                onPress={() => handleClose()}
              />
            </ViewInputHeader>
            <Label>Serviço: </Label>
            <Input value={editedService} onChangeText={setEditedService} />
            <Label>Usuário: </Label>
            <Input value={editedUser} onChangeText={setEditedUser} />
            <Label>Senha: </Label>
            <Input value={editedPassword} onChangeText={setEditedPassword} />

            <Button onPress={() => handleSaveEdit(id)}>
              <ButtonText>Editar</ButtonText>
            </Button>
          </ViewInput>
        </ViewEdit>
      </Modal>
    </Container>
  );
};

export default ContanerDatas;
