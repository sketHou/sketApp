import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import styles from './style.js'
import pages from '../../index.js';
import {Actions} from 'react-native-router-flux'

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://www.baidu.com/';


export default class webviewPage extends Component {
	constructor(props) {
		super(props);
        this.state = {};
	}
	render() {
		return (
			<View style={styles.container}>
				<WebView
					ref={WEBVIEW_REF}
					automaticallyAdjustContentInsets={false}
					source={{uri: DEFAULT_URL}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					startInLoadingState={true}
				/>
			</View>
		);
	}
}

