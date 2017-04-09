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
import ScheduleDetail from './ScheduleDetail';
import styles from '../styles';

class ScheduleList extends Component {
  state = { schedules: [] };

  componentWillMount() {
    axios.get('https://cap-backend.herokuapp.com/api/comments')
         .then(response => this.setState({ schedules: response.data }));
  }


  renderSchedules() {
    return this.state.schedules.map(schedule =>
      <ScheduleDetail key={schedule.time} schedule={schedule} />
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

          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Back
            </Text>
          </TouchableOpacity>
        </View>


      <ScrollView>
        {this.renderSchedules()}
      </ScrollView>

      </Card>

    );
  }
}

export default ScheduleList;
