import React from 'react';
import { Text, View, ScrollView, TextInput, Button, Alert, ToastAndroid, FlatList } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';
import Person from '../model/Person';

export default class PeopleScreen extends React.Component {
  static navigationOptions = {
    title: 'People List',
  };
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: []};
  }

  addPersonButton = () => {
    var person = new Person(this.state.name, this.state.email);
    var list = this.state.peopleList.slice();
    list.push(person);
    this.setState({peopleList: list});
    ToastAndroid.showWithGravity(
      person.getName() + " has been added. Size of Array: " + this.state.peopleList.length,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={Styles.container}>
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
        <ScrollView style={Styles.container}>
        <FlatList
          data={this.state.peopleList}
          extraData={this.state.peopleList}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <Text style={Styles.bodyText}>{item.getName()}</Text>
          )}
        />
        </ScrollView>
      </View>
    );
  }

}
