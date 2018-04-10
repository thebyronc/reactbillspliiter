import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../styles/styles';
import People from '../model/Person';

export default class PersonFlatList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      peopleList: []
    };
  }

  componentDidMount() {
    this.getDataFromParent();
  }

  getDataFromParent = () => {
    this.state.peopleList = this.state.peopleListFromParent;
  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.state.peopleList}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => (
            <Text style={Styles.bodyText}>{item.getName()}</Text>
          )}
        />
      </View>
    );
  }
  keyExtractor = (item, index) => item.id;
}
