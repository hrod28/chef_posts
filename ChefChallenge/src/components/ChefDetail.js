'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const ChefDetail = ({ chef }) => {
  const { name, restaurant, photo_url, restaurant_url, paired_with, serving_location } = chef;
  const {
    imageStyle,
    thumnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumnailStyle}
            source={{ uri: photo_url}}
          />
        </View>
        <View style={headerContentStyle}>
        <Text style={headerTextStyle}>{name}</Text>
        <Text>{restaurant}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: photo_url }} />
      </CardSection>

      <View style={headerContentStyle}>
        <Text>{paired_with}</Text>
        <Text>served from:{serving_location}</Text>
      </View>

      <CardSection>
        <Button onPress={() => Linking.openURL(restaurant_url)}>
          Vist This Chef's Website
        </Button>
      </CardSection>
    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '600'
  },
  thumnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default ChefDetail;
