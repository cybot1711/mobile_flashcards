import React from 'react';
import styled from 'styled-components/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { View, Text, Platform, FlatList } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import CustomStatusBar from './components/CustomStatusBar';
import reducer from './reducers'
import MainNavigator from './components/Routes';
import { setNotification } from './utils/helpers'

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


export default class App extends React.Component {
  componentDidMount() {
    setNotification();
  }

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