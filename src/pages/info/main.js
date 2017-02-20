import React, { Component } from 'react';
import {Text, View, TextInput,} from 'react-native';
import styles from './style.js'

export default class indexPage extends Component {
	constructor(props) {
		super(props);
        this.state = {
			text: ''
		};
	}
	render() {
		var _this = this;
		this.setState({
			text: _this.props.text
		});
		let text = _this.state.text;
		return (
			<View style={styles.container}>
				<Text style={styles.info}>
				This is info page
				</Text>
				<Text style={styles.info}>{text}</Text>
			</View>
		);
	}
}

