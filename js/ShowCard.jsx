const React = require('react')

const ShowCard = (show) => (
  <div className="show-card">
    <img src={`public/img/posters/${show.poster}`} className='show-card-img' />
    <div className="show-card-text">
      <h3 className="show-card-title">{show.title}</h3>
      <h4 className="show-card-year">{show.year}</h4>
      <p className="show-card-description">{show.description}</p>
    </div>
  </div>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  year: string.isRequired,
  poster: string.isRequired
}

module.exports = ShowCard
