import React from 'react';
import styled from 'styled-components/native';
import { TabNavigator } from 'react-navigation';
import { View, Text, Platform, FlatList } from 'react-native';
import {Ionicons, FontAwesome} from '@expo/vector-icons';
import { purple, white } from './uitils/colors'
import CustomStatusBar from './components/CustomStatusBar';
import One from './components/TestOne';
import Two from './components/TestTwo';

const AppContainer = styled.View`
 flex: 1;
 background: brown;
`;

const Tabs = TabNavigator({
    Deck: {
      screen: One,
      navigationOptions: {
        tabBarLable: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>,
      }
    },
    ['New Deck']: {
      screen: Two,
      navigationOptions: {
        tabBarLable: 'New Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor}/>,
      }
    }
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      }
    }
  });

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <CustomStatusBar/>
        <Tabs/>
      </AppContainer>
    );
  }
}