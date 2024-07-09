import './index.css'

const DenominationItem = props => {
  const {each} = props
  const {id, value, amountDeduction} = each
  const onDelete = () => {
    amountDeduction({value})
    console.log({value})
  }
  return (
    <li>
      <button type="button" onClick={onDelete} className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
