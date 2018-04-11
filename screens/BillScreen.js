import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../styles/styles';

export default class BillScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Bill',
  };

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.contentContainer}>
          <Text style={Styles.headerText}>BILL</Text>
        </View>
      </View>
    );
  }
}
