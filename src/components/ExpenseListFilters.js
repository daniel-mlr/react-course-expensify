/* eslint react/prop-types: 0 */
import React from 'react'
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = ( calenderFocused ) => {
    this.setState(() => ( { calenderFocused } ))
  }
  state = {
    calenderFocused: null
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>

        <select id="sel" value={this.props.filters.sortBy} onChange={(e) => {
          if (e.target.value==='date') {
            this.props.dispatch(sortByDate())
          } else {
            this.props.dispatch(sortByAmount())
          }
        }} >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="dateDebutRecherche"
          endDate={this.props.filters.endDate}
          endDateId="dateFinRecherche"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ExpenseListFilters)

