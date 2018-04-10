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

  };

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.props.peopleListFromParent}
          extraData={this.state}
          keyExtractor={(item, index) => index}
          renderItem={(item) => (
            <Text style={Styles.bodyText}>{item.name}</Text>
          )}
        />
      </View>
    );
  }

}
