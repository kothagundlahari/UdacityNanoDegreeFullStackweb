import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'MsBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'image': {
    'maxWidth': [{ 'unit': 'px', 'value': 460 }],
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'description': {
    'maxWidth': [{ 'unit': 'px', 'value': 705 }],
    'color': '#7C8B88',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'app': {
    'display': '-webkit-flex',
    'display': 'flex'
  },
  'title': {
    'backgroundColor': '#33BEBE',
    'color': 'white'
  }
});
