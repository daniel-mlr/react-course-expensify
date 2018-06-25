/* eslint react/prop-types: 0 */
import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

/*
 * To avoid inline functions (that would need to get recalculated on every
 * render), ceci est transformé en class based component, où la fonction 
 * this.onSubmit n'est appelé que lors d'un événement onSubmit
 */

// const  AddExpensePage = (props) => (
//   <div>
//     <h1>Add Expense</h1>
//     <ExpenseForm 
//       // passing the data out of the Expense Form
//       // by calling a prop that get passed in by the parent
//       // so that ExpenseForm can be reused for the edit page
//       onSubmit={(expense) => {
//         // props.dispatch(addExpense(expense))  ... remplacé par:
//         props.onSubmit(expense) // onSubmit est défini dans l'objet retourné
//         //                         par mapDispatchToProps plus bas
//         props.history.push('/')
//       }}
//     />
//   </div>
// )

// on exporte aussi la version non connectée pour les tests
export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

// de la doc:
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

// mapDispatchToProps: donne accès à 'dispatch' et doit retourner un objet
// Cet objet définit des props qui vont appeler dispatch

const mapDispatchToProps = (dispatch) => ({
  // nommé selon le *action generator*
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})
export default connect(undefined, mapDispatchToProps)(AddExpensePage)
