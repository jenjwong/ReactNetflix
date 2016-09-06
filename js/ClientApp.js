var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div

var MyTitle = require('./MyTitle')

var MyTitleFac = React.createFactory(MyTitle)




  var MyFirstComponent = (
    div(null,
      MyTitleFac({title: 'urMom'})
    )
  )
  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
