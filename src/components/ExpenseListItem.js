/* eslint react/prop-types: 0 */
import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, count, description, amount, createdAt }) => (
  <div>
    <p>{count} - <em>{description}</em>: {'\u00A0'} $ 
      {( amount/100 ).toFixed(2)} {'\u00A0'}
      {createdAt}
    </p>
    <button onClick={() => {
      //removeExpense()
      dispatch( removeExpense({ id }) )
      console.log(id, removeExpense({id}))
    }} >
    Remove
    </button>
  </div>
)

// export default ExpenseListItem
export default connect()(ExpenseListItem)
// _____________| simply give access to dispatch()

