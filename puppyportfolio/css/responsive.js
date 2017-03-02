import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'header_inner': {
    'display': 'flex',
    'flexWrap': 'wrap'
  },
  'header_image': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'header_text': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  },
  'header_image:nth-of-type(1)': {
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'header_image:nth-of-type(2)': {
    'width': [{ 'unit': '%H', 'value': 0.8 }]
  }
});
