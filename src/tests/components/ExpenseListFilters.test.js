import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters} from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByAmount = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter = {setTextFilter}
      sortByDate = {sortByDate}
      sortByAmount = {sortByAmount}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />)
})

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt data correctly', () => {
  // utilisation du setProps de enzyme
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  // wrapper.find('input').prop('onChange')({target:{value: altFilters.text}})
  const value = 'rent'
  wrapper.find('input').simulate('change', { target: { value } })
  expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
  // changer la propriété initiale (comme dans ligne 30)
  wrapper.setProps({ filters: altFilters })
  // wrapper.find('#sel').prop('onChange')( {target: {value: filters.sortBy } })
  const value = 'date'
  wrapper.find('#sel').simulate('change', {target: { value }})
  expect(sortByDate).toHaveBeenCalled()
})
test('should sort by amount', () => {
  //wrapper.find('#sel').prop('onChange')({target:{value: altFilters.sortBy}})
  const value = 'date'
  wrapper.find('#sel').simulate('change', {target: { value }})
  expect(sortByDate).toHaveBeenCalled()
})
test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(5, 'years')
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate, endDate
  })
  expect(setStartDate).toHaveBeenCalledWith(startDate)
  expect(setEndDate).toHaveBeenCalledWith(endDate)
})
test('should handle date focus change', () => {
  const focused = 'startDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focused)
  expect(wrapper.state('calenderFocused')).toBe(focused)
})
