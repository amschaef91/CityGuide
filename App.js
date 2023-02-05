import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

import data from './attractions.json';
const icon = require('./images/chicago.png');

export default class App extends React.Component {
  
  renderRow({item}) 
  {
    return(
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.info}>
          <Text style={styles.itemHead}>{item.name}</Text>
          <Text style={styles.address}>{item.address}</Text>
          <Text style={styles.url}>{item.modURL}</Text>
        </View>
      </View>
    );
  }
  
  render() 
  {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>City Guide</Text>
        <FlatList data={data} renderItem={this.renderRow} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: "#1c7da5",
    color: "#ede2e0",
    fontSize: 18,
    padding: 10,
    paddingTop: 60,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    borderRadius: 50,
    borderWidth: 1,
    justifyContent: 'center',
    height: 70,
    width: 70,
  },
  icon: {
    height: 45,
    width: 45
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  itemHead: {
    color: "#122737",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    color: "#3c4f62",
    fontSize: 16
  },
  url: {
    color: "#3c4f62",
    fontSize: 16,
    fontStyle: 'italic'
    
  },
  


});
