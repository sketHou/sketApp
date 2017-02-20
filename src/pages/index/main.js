import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style.js'
import * as pages from '../../index.js';

export default class indexPage extends Component {
	constructor(props) {
		super(props);
        this.state = {};
	}
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
				<View style={styles.button}>
					<TouchableOpacity onPress={() => this._pressButton('info')}>
						<Text style={styles.buttonText}>跳转到info页</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.button}>
					<TouchableOpacity onPress={() => this._pressButton('webview')}>
						<Text style={styles.buttonText}>跳转到webview页</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	_pressButton (pageName) {
		console.log(pageName);
		let navigator = this.props.navigator;
		navigator.push({
			name: pageName + ' page',
			component: pages[pageName + 'Page'],
			params: {
				text: 'hello ' + pageName + ' page'
			}
		})
	}
}

