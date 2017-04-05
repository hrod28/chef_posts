import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/main';

class ChefChallenge extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('ChefChallenge', () => ChefChallenge);
