import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView style={styles.container}>
        <StyledText>Open up App.js to start working on your app!</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
      </StyledView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
