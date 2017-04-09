'use strict';
import { StyleSheet } from 'react-native';

const grey = '#6B6B6B';
const green = '#E2E34B';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: grey,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: grey,
  },
  input: {
    backgroundColor: green,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  },
  signInInput: {
    backgroundColor: 'white',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    textAlign: 'center'
  },
  buttonContainer: {
    backgroundColor: grey,
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  headerContainer: {
    backgroundColor: white,
    justifyContent: 'center',
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2
  },
  button: {
    textAlign: 'center',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  link: {
    color: green
  },
  feedback: {
    textAlign: 'center'
  },

  //topics section
  flexContainer: {
    flex: 1,
    backgroundColor: grey
  },
  header: {
    marginTop: 20,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    flex: 24,
    paddingRight: 20,
    paddingLeft: 20
  },
  title: {
    textAlign: 'center',
    color: '#E2E34B'
  },

  //list section
  list: {
    flex: 1
  },
  row: {
    alignItems: 'center',
    backgroundColor: green,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    margin: 2,
    padding: 10
  },
  rowTitle: {
    fontWeight: 'bold'
  },

  //details section
  detailTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  detailSubtitle: {
    textAlign: 'center',
    fontSize: 14
  },
  comment: {
    color: black
  },

  imageStyle: {
    height: 110,
    borderWidth: 1,
    flex: 1,
    width: null
  },
  signInImageStyle: {
    height: 110,
    flex: 1,
    width: null
  }
});
