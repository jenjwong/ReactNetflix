/*  eslint-env mocha */
const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
const ShowCard = require('../js/ShowCard')

const debugLog = (isPassing, wrapper) => {
  return isPassing ? null : console.log(wrapper.debug())
}

describe('<Search />', () => {
  it('should render brand', () => {
    const wrapper = shallow(<Search />)
    const isPassing = wrapper.contains(<h1 className="brand">urMomBakesPies</h1>)
    debugLog(isPassing, wrapper)
    expect(isPassing).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    // searches based on the react component; returns an array of showcards
    // must use ShowCard instead of <ShowCard /> (second doesn't have any properties)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    // mount allows to simulate events and manipulate input
    const wrapper = mount(<Search />)
    // grabs input element from dom
    const input = wrapper.find('.search-input')
    // it's like writing house into the filter
    input.node.value = 'house'
    // fires on change event in react
    input.simulate('change')
    // does the state match data input (two way databinding work?)
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
