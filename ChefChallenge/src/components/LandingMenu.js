'use strict';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';

class LandingMenu extends Component {
  render() {
    return (
      <Card>
      
        <View>
          <Header headerText="Home Menu" />
        </View>

        <CardSection>
          <Button >
            Join Discussion
          </Button>
        </CardSection>
        <CardSection>
          <Button >
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
      </Card>
    );
  }
}

export default LandingMenu;
