const CONSTANTS = {
  MAX_PAGE_WIDTH: '900px',
  PAGE_WIDTH: '80%',
  TEXT_TO_TYPE_IN_ANIMATION: 'Frontend technology blog',
  HEADING_PARAGRAPH: 'frontend architecture, frontend community, javascript, es6+, react and much more...',
  ELEMENTS_PER_PAGE: 5,
};

const COLORS = {
  GREEN: '#77a026',
  LIGHT_GREY: '#dbdbdb',
  DARK_GREY: '#100e0e',
  MENU_BACKGROUND: '#0a0a0a',
  WHITE: '#fff',
};

const API = {
  ARTICLES: 'https://e1qf63lnk3.execute-api.eu-west-1.amazonaws.com/dev/articles',
};

const MENU = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Past articles',
    path: '/past-articles',
  },
  {
    title: 'About Author',
    path: '/about-author',
  },
]

export {CONSTANTS, API, COLORS, MENU};
