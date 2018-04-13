import React from 'react';
import { Text, View, AsyncStorage, TouchableOpacity, ToastAndroid, ScrollView, FlatList } from 'react-native';
import Styles from '../styles/styles';
import Person from '../model/Person';

export default class BillScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Bill',
  };
  constructor(props) {
    super(props);
    this.state = { test: '', peopleList: []};
  }
  componentDidMount = () => {

  }

  async getData() {
    let response = await AsyncStorage.getItem('@rbs:peopleList');
    let JSONresponse = await JSON.parse(response) || [];
    ToastAndroid.showWithGravity(
      response,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
    return response;
  }

  updateList = () => {
    let response = this.getData();
    this.setState({peopleList: this.getData()});
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.contentContainer}>
          <Text style={Styles.headerText}>BILL</Text>
        </View>
        <Text>{this.state.test}</Text>
        <TouchableOpacity onPress={this.updateList}>
          <View style={Styles.ctaButton}>
            <Text style={Styles.ctaText}>GET TEST</Text>
          </View>
        </TouchableOpacity>
        <ScrollView style={Styles.container}>
        <FlatList
          data={this.state.peopleList}
          extraData={this.state.peopleList}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => (
            <View style={Styles.viewList}>
              <Text style={Styles.textList}>Test{item.name} | {item.email}</Text>
            </View>
          )}
        />
        </ScrollView>
      </View>
    );
  }
}
