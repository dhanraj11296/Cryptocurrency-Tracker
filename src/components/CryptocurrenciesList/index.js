// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
class CryptocurrenciesList extends Component {
  renderCryptocurrenciesHeader = () => (
    <div className="listHeader">
      <p className="listCoinTypeHeading">Coin Type</p>
      <div className="usdAndEuroValuesContainer">
        <p className="listCoinValueHeading">USD</p>
        <p className="listCoinValueHeading">EURO</p>
      </div>
    </div>
  )
  renderCryptocurrenciesView = () => {
    const {cryptocurrenciesData} = this.props
    return (
      <div className="cryptocurrenciesListContainer">
        {this.renderCryptocurrenciesHeader()}
        <ul className="CryptocurrenciesList">
          {cryptocurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    return (
      <div className="cryptocurrenciesListContainer">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrencyImg"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurrenciesView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
