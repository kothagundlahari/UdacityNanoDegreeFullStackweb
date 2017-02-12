import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'MsBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'image': {
    'maxWidth': [{ 'unit': 'px', 'value': 460 }]
  },
  'description': {
    'maxWidth': [{ 'unit': 'px', 'value': 705 }]
  },
  'app': {
    'display': '-webkit-flex',
    'display': 'flex'
  },
  'title': {
    'backgroundColor': '#33BEBE'
  }
});
