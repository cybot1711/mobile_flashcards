import { purple, red, white } from "../utils/colors";
import Quiz from "./Quiz";
import { StackNavigator, TabNavigator } from "react-navigation";
import NewCard from "./NewCard";
import NewDeck from "./NewDeck";
import { Platform } from "react-native";
import Decks from "./Decks";
import DeckDetail from "./DeckDetail";

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
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple

      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }
});

export default MainNavigator