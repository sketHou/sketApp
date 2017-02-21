import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style.js';
import {Actions} from 'react-native-router-flux'
import * as pages from '../../index.js';

export default class indexPage extends Component {
	constructor(props) {
		super(props);
        this.state = {
			text: this.props.text
		};
	}
	_pressButton() {
		let navigator = this.props.navigator;
		navigator.pop();
	}
	
	render() {
		var _this = this;
		let text = _this.state.text;
		return (
			<View style={styles.container}>
				<View >
					<Text style={styles.info}>
					This is info page
					</Text>
					<Text style={styles.info}>{text}</Text>
				</View>
				<View style={styles.button}>
					<TouchableOpacity onPress={() => Actions.index({text: 'frmo info'})}>
						<Text style={styles.buttonText}>跳回index页</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

