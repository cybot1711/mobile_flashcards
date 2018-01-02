import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { white, red, orange } from '../utils/colors';

const Deck = styled.TouchableOpacity`
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: ${orange};
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: ${white};
`;

export const HeadingText = styled.Text`
  font-size: 35px;
  color: rgba(255, 255, 255, 1.0);
`;

export const TrailingText = styled.Text`
  font-size: 25px;
  color: ${red};
`;

export default ({ title, questions, navigation }) =>
  <Deck onPress={() => navigation.navigate('DeckDetail',{
    title: title,
    cards: questions.length,
    questions: questions,
  })}>
    <MaterialCommunityIcons
      name='cards-playing-outline'
      size={45}
      color={red}/>
    <HeadingText>{title}</HeadingText>
    <TrailingText>{questions.length} - Cards</TrailingText>
  </Deck>;