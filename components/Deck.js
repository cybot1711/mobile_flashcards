import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity } from 'react-native';
import { red } from '../utils/colors';
import { Deck, HeadingText, TrailingText } from './DeckStyles';


export default ({ title, questions, navigation }) =>
  <Deck onPress={() => navigation.navigate('DeckDetail', {
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