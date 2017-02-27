import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Lato', sans-serif',
    'color': '#747704',
    'fontWeight': 'Regular',
    'alignItems': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'margin': [{ 'unit': 'vh', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'vh', 'value': 3 }, { 'unit': 'px', 'value': 0 }]
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
