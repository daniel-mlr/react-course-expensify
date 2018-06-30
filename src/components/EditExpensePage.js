/* eslint react/prop-types: 0 */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

/*
const EditExpensePage = (props) => {
  console.log('dans edit expense page', props)
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // props.dispatch(editExpense(props.match.params.id, expense))
          props.dispatch(editExpense(props.expense.id, expense))
          props.history.push('/')
        }}
      />
      <button onClick={() => {
        //removeExpense()
        props.dispatch(removeExpense({ id: props.expense.id }))
        props.history.push('/')
      }}>
      Remove
      </button>
    </div>
  )
}
*/

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // this.props.editExpense(this.props.match.params.id, expense)
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Edit Expense</h2>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
          <button className="button button--secondary" onClick={this.onRemove}>
            Remove Expense
          </button>
        </div>
      </div>
    )
  }
}

// give access to the current expense object
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      (expense) => expense.id === props.match.params.id
    )
  }
}
// selon instructions dans lecture no. 125 à 08:05 min.
// voir doc de react-redux pour mapDispatchToProps, le second argument est
// ownProps: il donne accès aux props passés au connected component
//const mapDispatchToProps = (dispatch, props) => ({
//     mais le nouvel argument *props* semble inutile ici.
const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  //removeExpense: ({id}) => dispatch(removeExpense( {id: id }))
  removeExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
