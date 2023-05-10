import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Button, ButtonText } from './styled';

const Header = () => {
  const navigation = useNavigation();

  const handleAdd = () => {
    navigation.navigate('InputDatas', {});
  };

  return (
    <Container
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
    >
      <Title>Gerenciador de Senhas</Title>

      <Button>
        <ButtonText>
          <Icon name="plus" size={28} onPress={() => handleAdd()} />
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Header;
