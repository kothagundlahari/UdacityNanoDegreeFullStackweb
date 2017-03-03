import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header_inner': {
    'display': 'flex'
  },
  'header_image': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'order': '0'
  },
  'header_text': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'order': '1'
  },
  'header_image div:nth-of-type(1)': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'header_image div:nth-of-type(2)': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  }
});
