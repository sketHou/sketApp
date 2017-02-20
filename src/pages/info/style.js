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
    "info": {
        "textAlign": "center",
        "color": "#333",
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