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
    'textAlign': 'center'
  },
  'text-muted': {
    'color': '#BCBBBB',
    'textAlign': 'center'
  },
  'text-thin': {
    'fontWeight': '100'
  },
  'title-logo': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'width': [{ 'unit': 'px', 'value': 100 }],
    'height': [{ 'unit': 'px', 'value': 100 }]
  },
  'title-super': {
    'fontSize': [{ 'unit': 'px', 'value': 60 }]
  },
  'header_text': {
    'textAlign': 'right',
    'float': 'right'
  },
  'header_image': {
    'float': 'left'
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
