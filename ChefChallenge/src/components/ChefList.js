'use strict';
import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import ChefDetail from './ChefDetail';
import styles from '../styles';

class ChefList extends Component {
  state = { chefs: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/chefs')
         .then(response => this.setState({ chefs: response.data }));
  }


  renderChefs() {
    return this.state.chefs.map(chef =>
      <ChefDetail key={chef.name} chef={chef} />
    );
  }

  render () {
    console.log(this.state);

    return (

      <Card>

        <View>
          <Header headerText="Participating Chefs" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

      <ScrollView>
        {this.renderChefs()}
      </ScrollView>

      </Card>

    );
  }
}

export default ChefList;
