import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'body': {
    'fontFamily': ''Lato', sans-serif',
    'color': '#747704',
    'fontWeight': 'Regular',
    'display': 'flex',
    'flexDirection': 'column',
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
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
  },
  // *
*  Footer Styles
*
*
*
  '[class*="zocial-"]:before': {
    'color': 'black',
    'display': 'inline-block',
    'fontFamily': ''zocial', sans-serif',
    'textShadow': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#aaa' }],
    'width': [{ 'unit': 'em', 'value': 2 }]
  },
  'a:hover [class*="zocial-"]:before': {
    'color': '#3d85c6'
  },
  'a': {
    'color': '#4183C4',
    'fontWeight': '300',
    'textDecoration': 'none'
  },
  'a:hover': {
    'color': '#3d85c6',
    'textDecoration': 'underline'
  },
  'a#viewSource': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'display': 'block',
    'margin': [{ 'unit': 'em', 'value': 1.3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'div#social a': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'div#social a:last-of-type': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});
