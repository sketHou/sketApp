var React = require('react-native');
var { StyleSheet } = React;
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    "container": {
        "flex": 1,
        "backgroundColor": "#efefef",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        width: width,
        height: height,
        backgroundColor:'rgba(0,0,0,0.5)',
        position: 'absolute',
        top:0,
        left: 0
    },
    text: {
        backgroundColor:'rgba(0,0,0,0)',
        color: '#fff',
        fontSize: 36,
        borderWidth: 2,
        borderColor: '#fff',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    }
});