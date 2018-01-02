import React from 'react';
import styled from 'styled-components/native';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { View, Text, Platform, FlatList } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { purple, white, red } from './utils/colors'
import CustomStatusBar from './components/CustomStatusBar';
import Decks from './components/Decks';
import DeckDetail from './components/DeckDetail';
import NewDeck from "./components/NewDeck";
import reducer from './reducers'

const config = {
  key: 'root',
  storage,
};

const reducers = persistCombineReducers(config, { reducer });

const store = createStore(reducers);

persistStore(store);

const AppContainer = styled.View`
 flex: 1;
`;

const Tabs = TabNavigator({
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLable: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>,
      }
    },
    ['New Deck']: {
      screen: NewDeck,
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
        backgroundColor: Platform.OS === 'ios' ? white : red,
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

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: "Flash Cards",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"

      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "purple"
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <CustomStatusBar/>
          <MainNavigator/>
        </AppContainer>
      </Provider>
    );
  }
}