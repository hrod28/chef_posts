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
import SilentAuctionDetail from './SilentAuctionDetail';
import styles from '../styles';

class SilentAuction extends Component {
  state = { auctions: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/posts')
         .then(response => this.setState({ auctions: response.data }));
  }


  renderAuctions() {
    return this.state.auctions.map(auction =>
      <SilentAuctionDetail key={auction.title} auction={auction} />
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
          <Header headerText="Sneak Peek" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Home
            </Text>
          </TouchableOpacity>
        </View>

        <CardSection>
          <Button>
            scroll down for more info
          </Button>
        </CardSection>

      <ScrollView>
        {this.renderAuctions()}
      </ScrollView>

      </Card>

    );
  }
}

export default SilentAuction;
