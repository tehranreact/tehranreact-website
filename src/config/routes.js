const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/home`)
  },
  {
    path: '/404/',
    component: path.resolve(`src/pages/404.js`)
  }
];
