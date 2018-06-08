/* eslint react/prop-types: 0, quotes: 0 */
import React from 'react'
import { Link } from 'react-router-dom'

export const ExpenseListItem = ({
  id,
  count,
  description,
  amount,
  createdAt
}) => (
  <div>
    <p>{count} - <Link to={'/edit/'.concat(id)}>{description}</Link> 
      {'\u00A0'} $ {( amount/100 ).toFixed(2)}
      {'\u00A0'} {createdAt}
    </p>
  </div>
)

export default ExpenseListItem
// export default connect()(ExpenseListItem)
// _____________| simply give access to dispatch()

