const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes: {
    handleSearchTermChange: func,
    showSearch: bool,
    searchTerm: string
  },

  handleSearchTermEvent (e) {
    this.props.handleSearchTermChange(e.target.value)
  },

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input type='text' className='search-input' placeholder='search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to='/search'> Back </Link>
        </h2>
      )
    }
    return (
      <header className="header">
        <h1 className="brand">
          <Link to='/' className='brand-link'>svideo</Link>
        </h1>
      {utilSpace}
      </header>
    )
  }
})

module.exports = Header
