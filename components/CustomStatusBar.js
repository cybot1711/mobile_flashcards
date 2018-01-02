import React from 'react';
import styled from 'styled-components/native'
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';
import { purple } from '../utils/colors';

const Bar = styled.View`
  height: ${Constants.statusBarHeight};
`;

export default props =>
  <View>
    <Bar translucent backgroundColor={purple} {...props}/>
  </View>;