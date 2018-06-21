// ExpenseSummary.test.js

import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test('should render ExpenseSummary with three expenses', () => {
  const wrapper = shallow(<ExpenseSummary 
    expenseCount={ expenses.length} 
    expenseTotal={ 89695 }
  />)
  expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary 
    expenseCount={ [expenses[1]].length} 
    expenseTotal={ 85000 }
  />)
  expect(wrapper).toMatchSnapshot()
})
