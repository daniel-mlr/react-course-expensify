/* eslint react/prop-types: 0 */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

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
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>
          Remove
        </button>
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
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  //removeExpense: ({id}) => dispatch(removeExpense( {id: id }))
  removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
