import styled from 'styled-components/native';

import { Colors } from '../../config/colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 50px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;

export const Header = styled.View`
  width: 100%;
  padding: 15px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.color03};
`;

export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${Colors.color01};
`;

export const InputDataBox = styled.KeyboardAvoidingView`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${Colors.color04};
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${Colors.color03};
`;

export const Input = styled.TextInput`
  width: 75%;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  font-size: 18px;
  background-color: ${Colors.color01};
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  margin: 20px auto;
  padding: 10px 0px;
  border-radius: 5px;
  background-color: ${Colors.color01};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${Colors.color03};
`;
