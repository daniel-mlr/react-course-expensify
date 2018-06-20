/* eslint react/prop-types: 0, quotes: 0 */
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//export const ExpenseListItem = ({
const ExpenseListItem = ({
  id,
  count,
  description,
  amount,
  createdAt
}) => (
  <div>
    <p>{count} - <Link to={'/edit/'.concat(id)}>{description}</Link> 
      {numeral(amount / 100).format('$0,0.00')}
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
)
// plus besoin de dispatch. Donc:
export default ExpenseListItem
// utilisé dans la première version avec le bouton 'delete' adjoint à chaque
// item de la liste des expenses:
// export default connect()(ExpenseListItem)
//                ╰───────────────────────╯
//                            ▲
// ───────────────────────────┘
// simply give access to dispatch()

//    <p>{count} - <Link to={'/edit/'.concat(id)}>{description}</Link> 
//    <p>{count} - <Link to={`/edit/$(id)`}>{description}</Link> 
