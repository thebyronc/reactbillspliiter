import React from 'react';
import { Text, View } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';

export default class CreateAccountScreen extends React.Component {

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>CREATE ACCOUNT</Text>
      </View>
    );
  }

}
