const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve(`src/screens/home`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/screens/404.js`)
  }
];
