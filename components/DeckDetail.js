import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { orange, red } from '../utils/colors';
import { HeadingText, TrailingText } from './Deck';
import Button from './Button';

const Container = styled.View`
 flex: 1;
 background-color: ${orange};
 align-items: center;
 justify-content: center;
`;

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
    cards: navigation.state.params.cards,
  });

  render() {
    const { title, cards } = this.props.navigation.state.params;
    return (
      <Container>
        <MaterialCommunityIcons
          name='cards-playing-outline'
          size={45}
          color={red}/>
        <HeadingText>{title}</HeadingText>
        <TrailingText>{cards} Cards</TrailingText>
        <View>
          <Button addCard>Add Card</Button>
          <Button>Start Quiz</Button>
        </View>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  data: state,
});


export default connect(mapStateToProps)(DeckDetail)