import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'red' }, { 'unit': 'string', 'value': '!important' }]
  },
  '*': {
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'MsBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  '*': {
    'fontFamily': ''Open Sans', sans-serif'
  },
  'grid': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 1200 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'row': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'display': 'flex'
  },
  'col-1': {
    'width': [{ 'unit': '%H', 'value': 0.0833 }]
  },
  'col-2': {
    'width': [{ 'unit': '%H', 'value': 0.1666 }]
  },
  'col-3': {
    'width': [{ 'unit': '%H', 'value': 0.25 }]
  },
  'col-4': {
    'width': [{ 'unit': '%H', 'value': 0.3333 }]
  },
  'col-5': {
    'width': [{ 'unit': '%H', 'value': 0.41659999999999997 }]
  },
  'col-6': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  'col-7': {
    'width': [{ 'unit': '%H', 'value': 0.5832999999999999 }]
  },
  'col-8': {
    'width': [{ 'unit': '%H', 'value': 0.6666 }]
  },
  'col-9': {
    'width': [{ 'unit': '%H', 'value': 0.75 }]
  },
  'col-10': {
    'width': [{ 'unit': '%H', 'value': 0.8332999999999999 }]
  },
  'col-11': {
    'width': [{ 'unit': '%H', 'value': 0.9166 }]
  },
  'col-12': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  }
});
