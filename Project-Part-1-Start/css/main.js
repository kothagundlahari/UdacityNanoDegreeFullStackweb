import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Your styles go here!

Hint! You'll probably want to start by styling:
  * <body>
  * <article>
  * <h1>
  * <img>

I've left some boilerplate below for you.
  'body': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'article': {
    'width': [{ 'unit': 'em', 'value': 50 }]
  },
  'h1': {
    'textAlign': 'center'
  },
  'img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'hr': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.8 }]
  }
});
