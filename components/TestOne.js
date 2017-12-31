import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import data from '../uitils/defaultData';

export default () =>
    <FlatList
      data={data}
      renderItem={({ item }) => <TouchableOpacity><Text>{item.title}</Text></TouchableOpacity>}
    />;