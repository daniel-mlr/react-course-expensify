/* eslint react/prop-types: 0 */

import React from 'react'
import {connect} from 'react-redux'

// regular unconnected component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
  </div>
)

// function that maps the store state to components props
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList)
