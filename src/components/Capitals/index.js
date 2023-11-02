import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeId: countryAndCapitalsList[0].id,
  }

  onSelectChange = event => {
    this.setState({
      activeId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeId} = this.state

    const filteredList = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeId,
    )
    return filteredList.country
  }

  render() {
    const {activeId} = this.state
    const activeCountry = this.getCountry(activeId)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title"> Countries And Capitals </h1>
          <div className="select-main-container">
            <select
              className="select-container"
              onChange={this.onSelectChange}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {' '}
                  {eachItem.capitalDisplayText}{' '}
                </option>
              ))}
            </select>
            <p className="description"> is capital of which country? </p>
          </div>
          <p className="country"> {activeCountry} </p>
        </div>
      </div>
    )
  }
}

export default Capitals
