/* eslint react/prop-types: 0 */
/* eslint jsx-quotes: ["error", "prefer-double"] */
import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

// Regular unconnected component.
// Presentation component pattern.
// Get re-rendered with new prop values.
export const ExpenseList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses yet.</span>
          </div>
        ) : (
          props.expenses.map((expense, index) => (
            <ExpenseListItem {...expense}
              key={expense.id}
              index={index}
              count={index + 1}
            />
          ))
        )
      }
    </div>
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
//                     ╰─────────────╯  ╰─────────╯
//                           ▲                 ▲
//                           │                 │
// ce qu'on veux du 'store'──┘                 │
// component qu'on veut augmenter par le HOC ──┘
