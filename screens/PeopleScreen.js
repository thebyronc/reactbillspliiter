import React from 'react';
import { Text, View, ScrollView, TextInput, Button, Alert, ToastAndroid, FlatList, TouchableOpacity } from 'react-native';
import TestImport from '../testimport/TestImport';
import Styles from '../styles/styles';
import Person from '../model/Person';

export default class PeopleScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'People List',
  };
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', peopleList: []};
  }

  addPersonButton = () => {
    var person = new Person(this.state.name, this.state.email);
    var list = this.state.peopleList.slice();
    list.unshift(person);
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
        <View style={Styles.contentContainer}>
        <Text style={Styles.headerText}>DINERS</Text>
        </View>
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
            <TouchableOpacity onPress={this.addPersonButton}>
              <View style={Styles.ctaButton}>
                <Text style={Styles.ctaText}>ADD PERSON</Text>
              </View>
            </TouchableOpacity>

        <ScrollView style={Styles.container}>
        <FlatList
          data={this.state.peopleList}
          extraData={this.state.peopleList}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <View style={Styles.viewList}>
              <Text style={Styles.textList}>{item.getName()} | {item.getEmail()}</Text>
            </View>
          )}
        />
        </ScrollView>
      </View>
    );
  }

}
