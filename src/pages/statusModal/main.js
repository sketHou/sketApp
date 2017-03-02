import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style.js';
import {Actions} from 'react-native-router-flux'

export default class statusModal extends Component {
	constructor(props) {
		super(props);
        this.state = {
			hide: props.hide,
			message: props.message
		};
		this._hideModle = this._hideModle.bind(this);
	}

	_hideModle() {
		this.setState({
			hide: true
		});
		Actions.pop();
	}

	render() {
		if(this.state.hide){
			return (
				<View></View>
			)
		}else{
			return (
				<View style={styles.container}>
					<Text style={styles.text} onPress={this._hideModle}>{this.state.message} close</Text>
				</View>
			);
		}
		
	}
}

