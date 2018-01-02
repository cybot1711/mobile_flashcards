import React, { Component } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { View, Text, TextInput, TouchableOpacit, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { orange, red, white } from '../utils/colors';
import { HeadingText } from './Deck';
// import Button from './Button';
import { addDeck } from '../actions';

const Container = styled.View`
  flex: 1;
  background-color: ${orange};
  align-items: center;
  justify-content: center;
`;

class NewDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      error: false,
    }
  }

  handleSubmit = () => {
    if (this.state.text) {
      this.props.addDeck(this.state.text);
      this.props.navigation.navigate('DeckDetail', {
        title: this.state.text,
        cards: 0,
      });
    } else {
      this.setState({error: true})
    }
  };

  render() {
    return (
      <Container>
        <MaterialCommunityIcons
          name='cards-playing-outline'
          size={45}
          color={red}/>
        <HeadingText style={{ textAlign: 'center' }}>
          Enter A Title for your new Deck
        </HeadingText>
        <TextInput
          style={{
            height: 40,
            width: 280,
            marginTop: 15,
            color: white,
            borderBottomColor: red,
            borderBottomWidth: 3
          }}
          ref={input => {
            this.input = input;
          }}
          onChangeText={text => this.setState({ text })}
          underlineColorAndroid={'transparent'}
          placeholder={'Enter a title'}/>
        {this.state.error && <Text style={{color: red}}>Cannot be Blank</Text>}
        <Button title={'Submit'}
                style={{ marginTop: 10 }}
                onPress={this.handleSubmit}/>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addDeck: item => dispatch(addDeck(item))
});

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);