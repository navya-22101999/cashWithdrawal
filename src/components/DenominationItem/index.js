// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItem, withdrawAmmount} = props
  const {value} = denominationItem
  const onSubstrat = () => {
    withdrawAmmount(value)
  }
  return (
    <li>
      <button type="button" onClick={onSubstrat}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
