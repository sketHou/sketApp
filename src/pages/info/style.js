var React = require('react-native');
var { StyleSheet } = React;
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 64,
        width: null,
        width: null,
        backgroundColor:'rgba(0,0,0,0.8)',
    },
    info: {
        textAlign: 'center',
        color: '#333',
        fontSize: 22
    },
    button: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderColor: '#333',
        marginTop: 20
    },
    buttonText: {
        textAlign: 'center',
        lineHeight: 46
    },
    wrapper: {
        backgroundColor: 'rgba(255,255,255,0)'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    image: {
        width: width,
        height: 498*width/750, 
    },
    titlebox: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 40,
        color: '#fff',
        lineHeight: 40,
        textAlign: 'center',
        fontSize: 26

    }
});