/* eslint react/prop-types: 0 */
import React from 'react'
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
//import 'react-dates/initialize'
//import 'react-dates/lib/css/_datepicker.css'
import {
  setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate
} from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = ( calenderFocused ) => {
    this.setState(() => ( { calenderFocused } ))
  }
  state = {
    calenderFocused: null
  }

  // refactoring (s12 lect126)
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = (e) => {
    if (e.target.value==='date') {
      this.props.sortByDate()
    } else {
      this.props.sortByAmount()
    }
  }

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              id="sel" value={this.props.filters.sortBy}
              onChange={this.onSortChange}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
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
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({ filters: state.filters })
const mapDispatchToProps = (dispatch)=> ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: ()=> dispatch(sortByAmount()),
  setStartDate: (date) => dispatch(setStartDate(date)),
  setEndDate: (date) => dispatch(setEndDate(date)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)

