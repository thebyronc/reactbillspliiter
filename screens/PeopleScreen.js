import React from 'react';
import { Text, View } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';

export default class PeopleScreen extends React.Component {
  static navigationOptions = {
    title: 'People List',
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>People</Text>
      <TestImport />
      </View>
    );
  }
}
