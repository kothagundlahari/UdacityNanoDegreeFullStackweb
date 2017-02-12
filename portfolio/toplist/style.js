import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'outline': '1px solid red !important'
  },
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
  }
});
