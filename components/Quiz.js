import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { white, orange, red, gray, purple } from '../utils/colors';
import { fontSize, btnWidth } from '../utils/helpers';

var styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: orange,
  },
  text: {
    color: white,
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textAnswer: {
    color: red,
    fontSize: fontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnCorrect: {
    width: btnWidth,
    backgroundColor: red,
  },
  btnInCorrect: {
    width: btnWidth,
    backgroundColor: gray,
  }
});

class Quiz extends Component {
  state = {
    answered: false,
    correct: null,
    inCorrect: null,
    showScore: false,
    score: 0,
    results: false,
  };
  static navigationOptions = ({ navigation }) => ({
    title: ` Quiz - ${navigation.state.params.title}`,
  });

  renderQuiz = questions =>
    questions.map((item, i) =>
      <View style={styles.slide} key={i}>
        {this.state.results &&
        <Text style={styles.textAnswer}>You have scored: {this.state.score}/{questions.length}</Text>}
        <Text>{`Question ${i + 1} of ${questions.length}`}</Text>
        {!this.state.results && <View>
          {this.state.answered && item.isTrue && <Text style={styles.text}>The Answer was correct</Text>}
          {this.state.answered && !item.isTrue && <Text style={styles.text}>The Answer was incorrect</Text>}
          {!this.state.answered && <Text style={styles.text}>{item.question}</Text>}
          {!this.state.answered && <Text style={styles.textAnswer}>A: {item.answer}</Text>}
          {item.isTrue && this.state.correct && <Text>Your answer is correct</Text>}
          {!item.isTrue && this.state.inCorrect && <Text>Your answer is correct</Text>}
          {item.isTrue && this.state.inCorrect && <Text>Your answer incorrect</Text>}
          {!item.isTrue && this.state.correct && <Text>Your answer is inCorrect</Text>}
          <TouchableOpacity style={{ marginTop: 20 }}
                            onPress={() => this.setState({ answered: true })}>
            <Text style={{ fontSize: 18, color: purple }}>View Answer</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 30 }}>
            <Button title={'correct'}
                    onPress={() => {
                      if (item.isTrue) {
                        this.setState({ answered: true, correct: true, score: this.state.score++ });
                      } else {
                        this.setState({ answered: true, correct: true });
                      }
                    }}/>
          </View>
          <View style={{ marginTop: 20 }}>
            <Button title={'Incorrect'}
                    color={red}
                    onPress={() => {
                      if (!item.isTrue) {
                        this.setState({ answered: true, inCorrect: true, score: this.state.score + 1 });
                      } else {
                        this.setState({ answered: true, inCorrect: true });
                      }
                    }}/>
            {this.state.answered &&
            <View style={{ marginTop: 10 }}>
              <Button title={'Next Question'}
                      color={purple}
                      onPress={() => {
                        this.setState({
                          answered: false,
                          correct: null,
                          inCorrect: null,
                          score: 0
                        });
                        this._swiper.scrollBy(1)
                      }}/>
            </View>}
            {(i + 1) === questions.length &&
            <View style={{ marginTop: 10 }}>
              <Button title={'Show Results'}
                      color={purple}
                      onPress={() => {
                        this.setState({
                          results: true
                        });
                      }}/>
            </View>}
          </View>
        </View>}
        {this.state.results &&
        <View>
          <View style={{ marginTop: 10 }}>
            <Button title={'Restart Quiz'}
                    onPress={() => {
                      this.props.navigation.navigate('Quiz', {
                        title: this.props.navigation.state.params.title,
                        questions: this.props.navigation.state.params.questions,
                      })
                    }}/>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button title={'Return to Deck'}
                    color={red}
                    onPress={() => {
                      this.props.navigation.goBack();
                    }}/>
          </View>
        </View>}
      </View>);

  render() {
    const { questions } = this.props.navigation.state.params;
    return (
      <Swiper style={styles.wrapper}
              ref={(swiper) => {
                this._swiper = swiper;
              }}
              loop={false}
              scrollEnabled={false}
              showsButtons={false}>
        {this.renderQuiz(questions)}
      </Swiper>
    )
  }
}

export default Quiz;