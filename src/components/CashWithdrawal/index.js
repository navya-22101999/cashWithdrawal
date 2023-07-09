// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawAcc = amount => {
    this.setState(prevState => ({
      balance: prevState.balance - amount,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div>
        <div>
          <div>
            <div>S</div>
            <h1>Sarah Williams</h1>
          </div>
          <div>
            <p>Your Balance</p>
            <div>
              <p>{balance}</p>
              <p>In Rupees</p>
            </div>
          </div>
          <div>
            <p>Withdraw</p>
            <p>CHOOSE SUM (IN RUPEES)</p>
          </div>

          <ul>
            {denominationsList.map(each => (
              <DenominationItem
                denominationItem={each}
                withdrawAmmount={this.withdrawAcc}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
