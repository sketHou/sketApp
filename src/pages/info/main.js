import React, { Component } from 'react';
import {Text, View, TextInput,} from 'react-native';
import styles from './style.js'

export default class indexPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <View style={styles.tabbar}>
          <Text  style={styles.tabbartext}>menu bar</Text>
        </View>
      </View>
    );
  }
}

