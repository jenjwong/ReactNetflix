const React = require('react')
const { Link } = require('react-router')

  const Landing = () => (
    <div className='app-container'>
      <div className='home-info'>
        <h1 className='title'>ChampionoFAce!!</h1>
        <input className='search' type='text' placeholder='Search' />
        <Link to='/Search'className='browse-all'> or Browse Alsl</Link>
      </div>
    </div>
  )

  module.exports = Landing
