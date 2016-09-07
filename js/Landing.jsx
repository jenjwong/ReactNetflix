const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>ChampionoFAce!!</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/Search'className='browse-all'> or Browse the things</Link>
  </div>
)

module.exports = Landing
