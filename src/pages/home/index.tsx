import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../../components/header';
import ContanerDatas from '../../containers';

import { Container, ScrollView } from './styled';

import { DataProps } from '../../interfaces/dataProps';

const HomePage = () => {
  const [datas, setDatas] = useState<DataProps[]>([]);

  const fetchDatas = async () => {
    try {
      const response = await AsyncStorage.getItem('@datas');

      setDatas(JSON.parse(response));
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchDatas();
    }, []),
  );

  return (
    <Container>
      <Header />
      <FlatList
        data={datas}
        renderItem={({ item }) => (
          <ScrollView>
            <ContanerDatas
              id={item.id}
              service={item.service}
              username={item.username}
              password={item.password}
            />
          </ScrollView>
        )}
        keyExtractor={(item) => item.id}
        removeClippedSubviews={false}
      ></FlatList>
    </Container>
  );
};

export default HomePage;
