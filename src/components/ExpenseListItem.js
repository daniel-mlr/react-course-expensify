/* eslint react/prop-types: 0, quotes: 0 */
import React from 'react'
import { Link } from 'react-router-dom'

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
      {'\u00A0'} $ {( amount/100 ).toFixed(2)}
      {'\u00A0'} {createdAt}
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
