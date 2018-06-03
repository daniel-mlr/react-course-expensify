/* eslint react/prop-types: 0 */
import React from 'react'
import moment from 'moment' // remplace new Date; requis par react-dates
import {SingleDatePicker} from 'react-dates'  // calender picker tool
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const now = moment()
console.log(now.format('Do MMM YYYY'))

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calenderFocused: false,
    error: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({description}))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({note}))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }
  onDateChange = (createdAt) => {
    this.setState(()=> ( {createdAt} ))
  }
  onFocusChange = ({ focused }) => {
    this.setState(()=> ({ calenderFocused: focused}))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.'}))
    } else {
      this.setState(() => ({ error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Description" autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input type="number" placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // initial value
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea id="" name="" cols="30" rows="3" 
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}