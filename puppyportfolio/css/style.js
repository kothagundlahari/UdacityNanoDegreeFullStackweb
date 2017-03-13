import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'fontFamily': ''Lato', sans-serif',
    'color': '#747704',
    'fontWeight': 'Regular',
    'display': 'flex',
    'alignItems': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    // margin: 3vh 0 3vh 0;
    'textAlign': 'center'
  },
  'text-muted': {
    'color': '#BCBBBB'
  },
  'text-thin': {
    'fontWeight': '100'
  },
  'title-logo': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 100 }]
  },
  'title-super': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }]
  },
  'hr': {
    'backgroundColor': 'dimgrey !important',
    'color': 'dimgrey !important',
    'height': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '!important' }]
  },
  'article': {
    'alignItems': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'maxWidth': [{ 'unit': 'em', 'value': 50 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  }
});
