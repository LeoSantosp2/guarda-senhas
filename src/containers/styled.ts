import styled from 'styled-components/native';

import { Colors } from '../config/colors';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const View = styled.View`
  width: 100%;
  padding: 10px 0px;
`;

export const ViewDatas = styled.View`
  width: 90%;
  margin: auto;
  margin-bottom: 3px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${Colors.color04};
`;

export const ViewIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  margin: 5px 0px;
  font-size: 19px;
  color: ${Colors.color03};
`;

export const ViewEdit = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 52, 52, 0.1);
`;

export const ViewInput = styled.View`
  width: 90%;
  padding: 10px;
  border-radius: 5px;
  background-color: ${Colors.color03};
`;

export const ViewInputHeader = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
  color: ${Colors.color01};
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
