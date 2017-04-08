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

class SilentAuction extends Component {
  state = { auction: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/chefs')
         .then(response => this.setState({ auction: response.data }));
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

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>

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

        <CardSection>
          <Button>
            This Year's Participating Chefs:
          </Button>
        </CardSection>

      <ScrollView>
        {this.renderChefs()}
      </ScrollView>

      </Card>

    );
  }
}

export default SilentAuction;
