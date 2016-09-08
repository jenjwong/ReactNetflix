const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  propTypes: {
    route: object
  },

  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },

// if massive amounts of data use debouncing so it's more preformant
// cache hot titles & batched backend requests
// memoize search results

  render () {
    return (
      <div className="container">
        <header className="header">
          <h1 className="brand">urMomBakesPies</h1>
          <input value={this.state.searchTerm} type="text" className="search-input" placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className="shows">
          {this.props.route.shows
            .filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
