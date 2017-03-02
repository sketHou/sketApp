import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style.js';
import {Actions} from 'react-native-router-flux'

export default class @@name extends Component {
	constructor(props) {
		super(props);
        this.state = {};
	}
	render() {
		return (
			<View style={styles.container}></View>
		);
	}
}

