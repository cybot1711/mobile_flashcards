import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, Text, Button } from 'react-native';
import { orange, red } from '../utils/colors';
import { HeadingText, TrailingText } from './Deck';

const Container = styled.View`
 flex: 1;
 background-color: ${orange};
 align-items: center;
 justify-content: center;
`;

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { title, cards, questions } = this.props.navigation.state.params;
    return (
      <Container>
        <MaterialCommunityIcons
          name='cards-playing-outline'
          size={45}
          color={red}/>
        <HeadingText>{title}</HeadingText>
        <TrailingText>{cards} Cards</TrailingText>
        <View style={{
          marginTop: 30,
          width: 180
        }}>
          <Button title={'Add card'}
                  onPress={() => this.props.navigation.navigate('NewCard', {
                    title: title
                  })}/>
        </View>
        <View style={{
          marginTop: 30,
          width: 180
        }}>
          <Button title={'Start Quiz'} onPress={() => this.props.navigation.navigate('Quiz', {
            title: `Quiz - ${title}`,
            questions: questions,
          })}/>
        </View>
      </Container>
    )
  }
};

const mapStateToProps = state => ({
  data: state,
});


export default connect(mapStateToProps)(DeckDetail)