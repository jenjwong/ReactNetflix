const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const { Router, Route, hashHistory } = require('react-router')

const App = () => (
  <Router history={hashHistory}>
    <Router path='/' component={Landing} />
    <Router path='/Search' component={Search} />

  </Router>
)

  ReactDOM.render(<App />, document.getElementById('app'))
