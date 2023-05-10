import styled from 'styled-components/native';

import { Colors } from '../../config/colors';

export const Container = styled.View`
  width: 100%;
  padding: 0px 10px;
  padding-top: 35px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.color03};
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${Colors.color01};
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  color: ${Colors.color04};
`;
