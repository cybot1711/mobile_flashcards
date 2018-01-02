import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';

const Decks = props =>
  <FlatList
    data={props.data.reducer}
    keyExtractor={(item) => item.title}
    renderItem={({ item }) => <Deck {...item} {...props} />}/>;

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Decks);