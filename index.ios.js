/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry , Text} from 'react-native';
import {Scene, Router, NavBar, Actions, TabBar} from 'react-native-router-flux';
import * as Pages from './src/index.js';

class TabIcon extends Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

function backButton() {
	return <Text onPress={Actions.pop}>BACK</Text>
}

export default class sketApp extends Component {

	render() {
		return <Router>
			<Scene key="root" tabs={true} tabBarStyle={{backgroundColor: '#fff'}}>
				<Scene key="index" icon={TabIcon} component={Pages.indexPage} title="indexPage" initial={true} hideNavBar={true}></Scene>
				<Scene key="info" icon={TabIcon} component={Pages.infoPage} title="infoPage" hideNavBar={false}></Scene>
				<Scene key="webview" icon={TabIcon} component={Pages.webviewPage} title="webviewPage" hideNavBar={false}></Scene>
			</Scene>
		</Router>
	}
}


AppRegistry.registerComponent('sketApp', () => sketApp);
