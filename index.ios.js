/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Navigator
} from 'react-native';

import { indexPage } from './src/index.js';

export default class sketApp extends Component {
  /**
   * 配置场景动画
   * @param route 路由
   * @param routeStack 路由栈
   * @returns {*} 动画
   */
  configureScene(route, routeStack) {
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
    }
    return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
  }

  /**
   * 使用动态页面加载
   * @param route 路由
   * @param navigator 导航器
   * @returns {XML} 页面
   */
  renderScene(route, navigator) {
    return <route.component navigator={navigator}  {...route.passProps} />;
  }


  render() {
    return (
      <Navigator
        style = {{ flex : 1 }}
        initialRoute = {{ component : indexPage}}
        configureScene ={ this.configureScene }
        renderScene = { this.renderScene }/>
    );
  }
}

/*
  class Zipinput extends Component{
    
    constructor(props){
      super(props);
      this.state = {
        zip: '',
        forecast: {
          main: 'clouds',
          description: 'few clouds',
          temp: 45.7
        }
      };
    }

    _handleEvent(event){
      let text = event.nativeEvent.text;
      this.setState((state) => {
        return {
          zip: text
        };
      });
    }

    render(){
      return(
        <View>
          <Text>zip {this.state.zip}</Text>
          <TextInput style={styles.input} onSubmitEditing={(event) => this._handleEvent(event)} />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    input: {
      fontSize: 20,
      borderWidth: 2,
      height: 40,
      width: 100
    }
  });
*/

AppRegistry.registerComponent('sketApp', () => sketApp);
