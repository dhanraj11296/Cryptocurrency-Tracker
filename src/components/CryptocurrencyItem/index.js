// Write your JS code here
import './index.css'
const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} =
    cryptocurrencyDetails
  return (
    <li className="cryptocurrencyItem">
      <div className="logoAndTitleContainer">
        <img
          src={currencyLogoUrl}
          className="currencyLogo"
          alt={currencyName}
        />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="usdAndEuroValuesContainer">
        <p className="currencyValue">{usdValue}</p>
        <p className="currencyValue">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
