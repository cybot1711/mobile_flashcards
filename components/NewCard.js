import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacit,
  Button,
  CheckBox,
  KeyboardAvoidingView,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { red } from '../utils/colors';
import { HeadingText } from './DeckStyles';
import { addCard } from '../actions';
import { Input, Container } from './NewcardStyles'

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answer: null,
      isTrue: false,
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `New Card - ${navigation.state.params.title}`,
  });

  handleSubmit = () => {
    if (this.state.question && this.state.answer) {
      this.props.addCard({
        question: this.state.question,
        answer: this.state.answer,
        isTrue: this.state.isTrue
      }, this.props.navigation.state.params.title);
      this.input.clear();
      this.inputTwo.clear();
    } else {
      this.setState({ error: true })
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
          Enter A New Card
        </HeadingText>
        <Input
          innerRef={input => {
            this.input = input;
          }}
          onChangeText={text => this.setState({ question: text })}
          underlineColorAndroid={'transparent'}
          placeholder={'Enter a question'}/>
        <Input
          innerRef={input => {
            this.inputTwo = input;
          }}
          onChangeText={text => this.setState({ answer: text })}
          underlineColorAndroid={'transparent'}
          placeholder={'Enter a answer'}/>
        {this.state.error && <Text style={{ color: red }}>Cannot be Blank</Text>}
        <Text style={{ marginTop: 10 }}>
          Check if answer is True. Leave unchecked for false
        </Text>
        <CheckBox onChange={() => this.setState({ isTrue: true })}/>
        {this.state.error && <Text style={{ color: red }}>Cannot be Blank</Text>}
        <Button title={'Submit'}
                style={{ marginTop: 10 }}
                onPress={() => {
                  this.handleSubmit();
                  this.props.navigation.goBack();
                }}/>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addCard: (item, title) => dispatch(addCard(item, title))
});

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);