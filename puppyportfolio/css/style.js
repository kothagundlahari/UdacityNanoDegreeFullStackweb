import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Lato', sans-serif',
    'color': '#747704',
    'fontWeight': 'Regular',
    'display': 'flex',
    'flexDirection': 'column'
  },
  'text-muted': {
    'color': '#BCBBBB'
  },
  'text-thin': {
    'fontWeight': '100'
  },
  'title-logo': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'title-super': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }]
  },
  'hr': {
    'backgroundColor': 'dimgrey !important',
    'color': 'dimgrey !important',
    'border': [{ 'unit': 'string', 'value': 'solid' }, { 'unit': 'px', 'value': 0.5 }, { 'unit': 'string', 'value': 'dimgrey' }, { 'unit': 'string', 'value': '!important' }],
    'height': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }]
  }
});
