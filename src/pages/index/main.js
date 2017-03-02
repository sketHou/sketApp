import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import styles from './style.js';
import {Actions} from 'react-native-router-flux';

export default class indexPage extends Component {
	constructor(props) {
		super(props);
        this.state = {};
	}
	render() {
		return (
			<Image style={styles.container} source={require('../images/bg.jpg')}>

				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					SKET APP
				</Text>
				<Text style={styles.instructions}>
					Just for Test
				</Text>
				<View style={styles.button}>
					<TouchableOpacity onPress={() => Actions.statusModal({hide:false, message: 'test'})}>
						<Text style={styles.buttonText}>Upload Image</Text>
					</TouchableOpacity>
				</View>
			</Image>
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

