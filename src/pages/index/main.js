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
					<TouchableOpacity onPress={this._pressButton.bind(this)}>
						<Text style={styles.buttonText}>跳转到info页</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}

	_pressButton () {
		let navigator = this.props.navigator;
		navigator.push({
			name: 'info page',
			component: pages.infoPage,
			params: {
				text: 'hello info page'
			}
		})
	}
}

