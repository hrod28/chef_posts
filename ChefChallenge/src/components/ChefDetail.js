'use strict';
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, Header } from './common';


const ChefDetail = ({ chef }) => {
  const { name, restaurant, photo_url, restaurant_url, paired_with, serving_location } = chef;
  const {
    imagesStyle,
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
          style={imagesStyle}
          source={{ uri: photo_url }} />
      </CardSection>

      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumnailStyle}
      source={{ uri: photo_url}}
      />
      </View>
      <View style={headerContentStyle}>
      <Text style={headerTextStyle}>Paired With:</Text>
      <Text style={headerTextStyle}>{paired_with}</Text>
      </View>
      </CardSection>

      <CardSection>
      <View style={thumbnailContainerStyle}>
      <Image
      style={thumnailStyle}
      source={{ uri: photo_url}}
      />
      </View>
      <View style={headerContentStyle}>
      <Text style={headerTextStyle}>Serving From:</Text>
      <Text style={headerTextStyle}>{serving_location}</Text>
      </View>
      </CardSection>


      <CardSection>
        <Button onPress={() => Linking.openURL(restaurant_url)}>
          Find This Location on Google Maps
        </Button>
      </CardSection>
    </Card>
  );
};
// style={headerContentStyle}
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },
  headerTextStyle: {
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
  imagesStyle: {
    height: 300,
    backgroundColor: 'white',
    flex: 1,
    width: null
  }
};

export default ChefDetail;
