// configs so node can run in browser type environment with es6; phantom js is really slow;
// mocha --require test/helpers/setup.js (this command configures mocha)

require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
