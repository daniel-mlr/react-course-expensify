// ExpenseSummary.js
/* eslint react/prop-types: 0 */

import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total.js'


export const ExpenseSummary = ({ expenseCount, expenseTotal }) => { 
  const expWord = (expenseCount > 1 ) ? 'expenses' : 'expense'
  const expTotal = numeral(expenseTotal / 100 ).format('$0,0.00')
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          Viewing <span>{expenseCount}</span> { expWord } totalling <span>{expTotal}</span>
        </h2>
        <div className="page-header_actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div> 
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpenseSummary)
