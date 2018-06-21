// ExpenseSummary.js
/* eslint react/prop-types: 0 */

import React from 'react'
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total.js'


export const ExpenseSummary = (props) => (
  <p>Viewing {props.expenseCount} 
  expense{(props.expenseCount > 1 ) && 's'}&nbsp; 
  totalling {props.expenseTotal} </p> 
)

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: expenses.length,
    expenseTotal: expensesTotal(expenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
