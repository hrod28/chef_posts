'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';

class LandingMenu extends Component {



  render() {
    return (
      <Card>

        <View>
          <Header headerText="Home Menu" />
          <TouchableOpacity
            onPress={() => this.props.navigator.pop()}
          >
            <Text style={styles.link}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

      <ScrollView>
        <CardSection>


          <Button onPress={() => this.props.navigator.push({name: 'topics'})}>
            Join Discussion
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.props.navigator.push({name: 'ChefList'})}>
            Discover Chefs
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Today's Menu
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Event Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Event Map
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Cast Your Vote!
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Silent Auction Sneak Peek
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection>
      </ScrollView>
      </Card>
    );
  }
}

export default LandingMenu;
