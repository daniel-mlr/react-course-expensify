/* eslint react/prop-types: 0 */

import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Regular unconnected component.
// Presentation component pattern.
// Get re-rendered with new prop values.
export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses yet</p>
      ) : (
        props.expenses.map( ( expense, index ) => (
          <ExpenseListItem {...expense}
            key={expense.id}
            index={index}
            count={index + 1}
          />
        ))
      )
    }
  </div>
)

// function that maps the store state to components props.
// Automatically rerun when state changes.
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

// higher order component
export default connect(mapStateToProps)(ExpenseList)
//                         /\                /\
//                          |                 |
// ce qu'on veux du 'store'_|                 |
// component qu'on veut augmenter par le HOC _|

