'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import styles from '../styles';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';

class LandingMenu extends Component {



  render() {
    return (
      <Card>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>

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
        <CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection>
        <CardSection>
          <Button>
            Special Thanks
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
