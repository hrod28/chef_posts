import React from 'react';
import {
  Navigator
} from 'react-native';


import LandingMenu from './components/LandingMenu';
import ChefList from './components/ChefList';
import signIn from './components/auth/signIn';
import signUp from './components/auth/signUp';
import chooseName from './components/auth/chooseName';
import forgotPassword from './components/auth/forgot-password';
import Events from './components/ChefList';
import EventDetail from './components/ChefDetail';
import topics from './components/topics';
import topicDetail from './components/topic-detail';

const routes = {
  signIn,
  signUp,
  chooseName,
  forgotPassword,
  topics,
  topicDetail,
  LandingMenu,
  events: Events,
  eventDetail: EventDetail
}

module.exports = React.createClass({
  render() {
    return (
      <Navigator
        initialRoute={{name: 'events'}}
        renderScene={this.renderScene}
      />
    )
  },

  renderScene(route, navigator) {
    let Component = routes[route.name];
    let {displayName, title, author, row_uid} = route;

    return (
      <Component
        navigator={navigator}
        displayName={displayName}
        title={title}
        author={author}
        row_uid={row_uid}
      />
    )
  }
})
