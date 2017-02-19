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
    'fontFamily': 'Roboto',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#424242'
  },
  'h1': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h2': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h3': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h4': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'h5': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'header': {
    'boxSizing': 'border-box'
  },
  'nav': {
    'boxSizing': 'border-box'
  },
  'footer': {
    'boxSizing': 'border-box'
  },
  'section': {
    'boxSizing': 'border-box'
  },
  'article': {
    'boxSizing': 'border-box'
  },
  'div': {
    'boxSizing': 'border-box'
  },
  'ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'news__more': {
    'float': 'right',
    'fontSize': [{ 'unit': 'em', 'value': 0.8 }],
    'color': '#333',
    'textDecoration': 'none'
  },
  // *
 * Header
 *
  'header': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.26)' }],
    'minHeight': [{ 'unit': 'px', 'value': 56 }],
    'transition': 'min-height 0.3s'
  },
  'header__inner': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'header__logo': {
    'height': [{ 'unit': 'px', 'value': 72 }],
    'marginRight': [{ 'unit': 'em', 'value': 1 }],
    'verticalAlign': 'top',
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  'header__title': {
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'em', 'value': 4 }],
    'margin': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.25 }],
    'display': 'inline-block',
    'color': '#212121'
  },
  // *
 * Top Level Navigation
 *
  'nav': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'nav__list': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'nav__item': {
    'boxSizing': 'border-box',
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.24 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'padding': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 24 }],
    'textTransform': 'uppercase'
  },
  'nav a': {
    'textDecoration': 'none',
    'color': '#616161',
    'padding': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }]
  },
  'nav a:hover': {
    'textDecoration': 'underline',
    'color': '#212121'
  },
  // *
 * Main
 *
  'main': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.26)' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // *
 * Content
 *
  // *
 * Hero
 *
  'hero': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative',
    'backgroundImage': 'url("./images/dog.jpg")',
    'backgroundSize': 'cover',
    'height': [{ 'unit': 'px', 'value': 300 }],
    'screen&&<w550': {
      'order': '0',
      'width': [{ 'unit': '%H', 'value': 0.6 }]
    }
  },
  'hero article': {
    'boxSizing': 'border-box',
    'backgroundColor': '#000',
    'backgroundColor': 'rgba(0, 0, 0, 0.7)',
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': '%V', 'value': 0.4 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'color': '#fff',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  // *
 * Top News
 *
  'top-news': {
    'height': [{ 'unit': 'px', 'value': 300 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E0E0E0' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'news__title': {
    'fontWeight': '300',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E0E0E0' }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'top-news__item': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E0E0E0' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'lineHeight': [{ 'unit': 'px', 'value': 19.2 }]
  },
  'top-news__item:before': {
    'content': '"» "'
  },
  'top-news__item:last-child': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }]
  },
  'top-news__item a': {
    'textDecoration': 'none',
    'color': '#666',
    'padding': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'inherit' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'inherit' }]
  },
  'top-news__item a:hover': {
    'textDecoration': 'underline'
  },
  'top-news__item a:active': {
    'textDecoration': 'underline'
  },
  // *
 * Sport Scores
 *
  'scores': {
    'paddingTop': [{ 'unit': 'em', 'value': 1 }]
  },
  'scores__table': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderCollapse': 'collapse'
  },
  'scores__table th': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'scores__table td': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'scores__table th': {
    'color': '#fff',
    'fontWeight': '300',
    'backgroundColor': '#78909C'
  },
  'scores__table tr:nth-child(odd) td': {
    'backgroundColor': '#fff'
  },
  'scores__table tr:nth-child(even) td': {
    'backgroundColor': '#eceff1'
  },
  'scores__table tdwinner': {
    'fontWeight': 'bold'
  },
  'scores__table td:nth-child(3)': {
    'textAlign': 'right'
  },
  'scores__table td:nth-child(2)': {
    'textAlign': 'center'
  },
  'scores__table td:nth-child(5)': {
    'textAlign': 'center'
  },
  // *
 * Weather
 *
  'weather': {
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'weather__location': {
    'display': 'block',
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }]
  },
  'weather__desc': {
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'weather__today': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'verticalAlign': 'middle'
  },
  'weather__today__image': {
    'verticalAlign': 'middle'
  },
  'weather__today__temp': {
    'fontSize': [{ 'unit': 'em', 'value': 3 }]
  },
  'weather__today__deg': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'display': 'inline'
  },
  'weather__next__item': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'textAlign': 'center'
  },
  'weather__next__item span': {
    'display': 'block'
  },
  'weather__next__image': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // *
 * Recent News
 *
  'recent-news': {
    'clear': 'both',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }]
  },
  'snippet': {
    'clear': 'both',
    'margin': [{ 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 24 }, { 'unit': 'px', 'value': 0 }]
  },
  'snippet__thumbnail': {
    'width': [{ 'unit': 'px', 'value': 100 }],
    'float': 'left',
    'marginRight': [{ 'unit': 'em', 'value': 1 }]
  },
  'snippet__title': {
    'fontWeight': '500'
  },
  'snippet__title a': {
    'textDecoration': 'none',
    'color': '#666',
    'padding': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'inherit' }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'string', 'value': 'inherit' }]
  },
  'snippet__title a:hover': {
    'textDecoration': 'underline'
  },
  'snippet__title a:active': {
    'textDecoration': 'underline'
  },
  // *
 * Footer
 *
  'footer': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E0E0E0' }],
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'footer li': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 1 }]
  },
  'footer a': {
    'textDecoration': 'none',
    'color': '#333',
    'padding': [{ 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 1.5 }]
  }
});
