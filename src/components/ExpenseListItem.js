/* eslint react/prop-types: 0, quotes: 0 */
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

//export const ExpenseListItem = ({
const ExpenseListItem = ({
  id,
  // count,
  description,
  amount,
  createdAt
}) => (
  <Link className="list-item" to={'/edit/'.concat(id)}>
    <div>
      {/*<span>{count}</span>*/}
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link> 
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
