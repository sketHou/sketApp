/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry , Text} from 'react-native';
import {Scene, Router, NavBar, Actions, TabBar, Modal} from 'react-native-router-flux';
import * as Pages from './src/index.js';
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * @param  {String} nameString 图标名称 通过 https://oblador.github.io/react-native-vector-icons/ 查找 FontAwesome下 的图标
 * @return {Class} 
 */
function TabIconFactory(iconName) {
	return React.createClass({
		render() {
			return (
				<Icon name={iconName} size={32} color={this.props.selected ? '#FFA07A' :'#fff'}></Icon>
			);
		}		
	})
}

function backButton() {
	return <Text onPress={Actions.pop}>BACK</Text>
}

export default class sketApp extends Component {


	render() {
		return <Router getSceneStyle={this.configureScene}>
			<Scene key="modalRoot" component={Modal}>
				<Scene key="root" tabs={true} tabBarStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
					<Scene key="index" icon={TabIconFactory('home')} component={Pages.indexPage} title="indexPage" initial={true} hideNavBar={true}></Scene>
					<Scene key="info" icon={TabIconFactory('info-circle')} component={Pages.infoPage} title="infoPage" hideNavBar={false}></Scene>
					<Scene key="webview" icon={TabIconFactory('link')} component={Pages.webviewPage} title="webviewPage" hideNavBar={false}></Scene>
				</Scene>
				<Scene key="statusModal" component={Pages.statusModal}></Scene>
			</Scene>
			
		</Router>
	}
}


AppRegistry.registerComponent('sketApp', () => sketApp);
