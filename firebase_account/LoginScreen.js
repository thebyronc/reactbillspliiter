import React from 'react';
import { Text, View } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';

export default class LoginScreen extends React.Component {

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.headerText}>LOGIN</Text>
      </View>
    );
  }

}
