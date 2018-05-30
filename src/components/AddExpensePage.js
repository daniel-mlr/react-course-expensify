/* eslint react/prop-types: 0 */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const  AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      // passing the data out of the Expense Form
      // by calling a prop that get passed in by the parent
      // so that ExpenseForm can be reused for the edit page
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        props.history.push('/')
      }}
    />
  </div>
)
export default connect()(AddExpensePage)
