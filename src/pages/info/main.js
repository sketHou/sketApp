import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './style.js';
import {Actions} from 'react-native-router-flux'
import * as pages from '../../index.js';
import Swiper from 'react-native-swiper';

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
				<Swiper style={styles.wrapper} height={200} showsButtons={true}>
					<View style={styles.slide} >
						<Image style={styles.image} source={require('./images/pic1.jpg')}></Image>
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={require('./images/pic2.jpg')}></Image>
					</View>
					<View style={styles.slide} >
						<Image style={styles.image} source={require('./images/pic3.jpg')}></Image>
					</View>
				</Swiper>
				<Text style={styles.titlebox}>All Images</Text>
			</View>
		);
	}
}

