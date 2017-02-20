import React, { Component } from 'react';
import { View, WebView } from 'react-native';
import styles from './style.js'
import pages from '../../index.js';

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://m.facebook.com';


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
					source={{uri: 'https://m.facebook.com'}}
					javaScriptEnabled={true}
					domStorageEnabled={true}
					decelerationRate="normal"
					startInLoadingState={true}
				/>
			</View>
		);
	}
}

