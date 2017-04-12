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
  Picker,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';
import styles from '../styles';
import DishLibrary from './DishLibrary';

module.exports = React.createClass ({

  getInitialState () {
  return({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    visited_all: '',
    vote1: '',
    vote2: '',

  });
},


handleSubmit(event) {
  // event.preventDefault();
  //console.log(this.state.skills);
  // alert('A form was submitted: ' + this.state.value);
  // console.log(this.state.value);

  var postdata = {
    first_name: this.state.first_name,
    last_name:this.state.last_name,
    username: this.state.username,
    password: this.state.password,
    email: this.state.username,
    visited_all: this.state.visited_all,
    vote1: this.state.vote1,
    vote2: this.state.vote2
  };


  axios.post('http://localhost:3000/api/users', { postdata })
    .then((err, res)=>{
      console.log(postdata);
      if (err || !res.ok) {
        console.log('ERROR: ', err);
      } else {
        console.log(res.body);

      }
    });
  },

  render() {
    return (
      <Card>

      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/17814533_777769615722762_813215094853927895_o.jpg?oh=ebe117ab59dcf2781bf8488bfc421a53&oe=595CFB47' }} />
      </CardSection>


        <View>
          <Header headerText="Cast Your Vote Here:" />
          <TouchableOpacity
            onPress={() => this.props.navigator.push({name: 'LandingMenu'})}
          >
            <Text style={styles.link}>
              Home
            </Text>
          </TouchableOpacity>
        </View>

      <ScrollView>
        <CardSection>
          <Input
            label="First Name:"
            placeholder="jane"
            style={styles.input}
            onChangeText={(text) => this.setState({first_name: text})}
            value={this.setState.text}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Last Name:"
            placeholder="doe"
            style={styles.input}
            onChangeText={(text) => this.setState({last_name: text})}
            value={this.setState.text}
          />
        </CardSection>

        <CardSection>
        <Input
          label="Email:"
          placeholder="email@email.com"
          style={styles.input}
          onChangeText={(text) => this.setState({email: text})}
          value={this.setState.text}
        />
        </CardSection>

        <CardSection>
          <Input
            label="username:"
            placeholder="runner53"
            style={styles.input}
            onChangeText={(text) => this.setState({username: text})}
            value={this.state.text}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Tried all Dishes:"
            placeholder="true or false"
            style={styles.input}
            onChangeText={(text) => this.setState({visitedAll: text})}
            value={this.state.text}
          />
        </CardSection>


      <ScrollView>
        <CardSection>
          <DishLibrary

          />
        </CardSection>
      </ScrollView>


        <CardSection>
          <Input
            label="Vote1:"
            placeholder="your favorite dish here"
            style={styles.input}
            onChangeText={(text) => this.setState({vote1: text})}
            value={this.state.text}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Vote2:"
            placeholder="2nd favorite dish here"
            style={styles.input}
            onChangeText={(text) => this.setState({vote2: text})}
            value={this.state.text}
          />
        </CardSection>


        <CardSection>
          <Button onPress={() => this.handleSubmit()}>
            Submit Your Vote
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection><CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection><CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection><CardSection>
          <Button>
            Special Thanks
          </Button>
        </CardSection>
      </ScrollView>
      </Card>
    );
  }
});
