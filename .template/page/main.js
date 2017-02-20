import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './style.js'
import pages from '../../index.js';

export default class @@namePage extends Component {
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

