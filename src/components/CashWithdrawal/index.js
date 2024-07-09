import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawl extends Component {
  state = {balance: 2000}

  amountDeduction = value => {
    this.setState(prevState => ({balance: prevState - value}))
  }

  render() {
    const {balance} = this.state

    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="dash_card">
          <div className="inetial_separation">
            <h1 className="inetial">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="separation">
            <p className="balance">Your Balance</p>
            <div className="rupees">
              <p className="rupees_heading">{balance}</p>
              <p className="rupees_text">In Rupees</p>
            </div>
          </div>
          <p className="rupees_heading">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items">
            {denominationsList.map(each => (
              <DenominationItem
                amountDeduction={this.amountDeduction}
                each={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawl
