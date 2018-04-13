import React from 'react';
import { Text, View } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Test',
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>Example Test Content</Text>
      <TestImport />
      </View>
    );
  }
}
