const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes
const Header = require('./Header')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  propTypes: {
    route: object
  },

// abstract to searchTerm instead of using event

  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },

// if massive amounts of data use debouncing so it's more preformant
// cache hot titles & batched backend requests
// memoize search results

  render () {
    return (
      <div className="container">
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />

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
