import React from 'react';
import { Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';
import Person from '../model/Person';

export default class PeopleScreen extends React.Component {
  static navigationOptions = {
    title: 'People List',
  };
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: ['hi']};
  }

  render() {
    return (
      <View style={Styles.container}>
        <ScrollView style={Styles.container}>
        <Text style={Styles.headerText}>People</Text>
            <TextInput
              style={Styles.textInput}
              placeholder="Name"
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />

            <TextInput
              style={Styles.textInput}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
            />
            <Button
              style={Styles.ctaButton}
              onPress={this.addPersonButton}
              title="Add Person"
            />

            { this.state.peopleList.map((item, key)=>(
              <Text key={key} style={Styles.bodyText}> { item } </Text>)
            )}

        </ScrollView>
      </View>
    );
  }

  addPersonButton = () => {
    var person = new Person("jo", "email");
    this.state.peopleList.push(this.state.name);

    alert(person.getName());

  }
}
