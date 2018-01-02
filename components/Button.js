import React from 'react';
import styled from 'styled-components/native'
import { TouchableOpacity, View, Text } from 'react-native';
import { white, purple, red } from '../utils/colors';

const Button = styled.TouchableOpacity`
  width: 180px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${({ primary }) => (primary ? white : red)}; 
  align-items: center;
  justify-content: center;
`;

const BtnText = styled.Text`
  color: ${({ primary }) => primary ? red : white};
  font-size: 16px;
`;

export default props =>
  <Button>
    <View>
      <BtnText>{props.children}</BtnText>
    </View>
  </Button>