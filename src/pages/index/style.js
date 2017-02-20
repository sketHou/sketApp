var React = require('react-native');
var { StyleSheet } = React;
module.exports = StyleSheet.create({
    "container": {
        "flex": 1,
        "backgroundColor": "#efefef",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center"
    },
    "welcome": {
        "color": "#333",
        "textAlign": "center",
        "fontSize": 22,
        "paddingTop": 20,
        "paddingBottom": 20,
        "paddingRight": 20,
        "paddingLeft": 20,
        "textShadowOffset": {
            "width": 10,
            "height": 10
        }
    },
    "instructions": {
        "color": "#333",
        "textAlign": "center",
        "fontSize": 22
    },
    "button": {
        "width": 200,
        "height": 50,
        "borderWidth": 1,
        "borderColor": "#333",
        "marginTop": 20
    },
    "buttonText": {
        "textAlign": "center",
        "lineHeight": 46
    }
});