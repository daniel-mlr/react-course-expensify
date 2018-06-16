import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render Expense Form correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render Expense Form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} /> )
  expect(wrapper).toMatchSnapshot()
})
test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />)
  // point de comparaison avant submit
  expect(wrapper).toMatchSnapshot()

  // la fonction substitut 'preventDefault' est  ajouté pour éviter le message
  // 'Cannot read property 'preventDefault' of undefined', car le onSubmit dans
  // ExpenseForm s'attend à un objet  'e' dans la commande e.preventDefault().
  wrapper.find('form').simulate('submit', {preventDefault: () => {}})

  // on regarder la propriété 'error de 'state'
  expect(wrapper.state('error').length).toBeGreaterThan(0)

  // point de comparaison après submit
  expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
  const value = 'New description'
  const wrapper = shallow(<ExpenseForm />)
  // Simulation de l'événement 'change'
  // make sure 'target.value' actually exist dans l'objet 'e'
  // on accède au premier élément input
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })
  // vériier que le 'state' change correctement
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on textarea change', () => {
  const value = 'New note'
  const wrapper = shallow(<ExpenseForm />)
  // seulement 1 testarea, alors pas besoin de .at(0)
  wrapper.find('textarea').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set amount if valid input', () => {
  const value = '23.50'
  const wrapper = shallow(<ExpenseForm />)
  // le second élément input est le 'amount'
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value)
})
test('should not set amount if invalid input', () => {
  const value = '12.122'
  const wrapper = shallow(<ExpenseForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('')
})

// utilisation de spy
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn() // fake function
  /*
  onSubmitSpy()  // on call le spy, donc le 'expect' devrait passer sans erreur
  expect(onSubmitSpy).toHaveBeenCalled()
  */
  const wrapper = shallow(<ExpenseForm 
    expense={expenses[0]}
    onSubmit={onSubmitSpy}
  />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error')).toBe('')
  // on ne peut pas simplement prendre expenses[0] comme argument pour
  // .toHaveBenLastCalledWith() car il contient un membre ('id') qui ne devrait
  // pas être présent.
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<ExpenseForm/>)
  // on peut sélectionner un component par le component name...
  // puis on peut aller chercher une propriété spécifique
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
  // ceci ne fonctionne pas: 
  // wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<ExpenseForm/>)
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
  expect(wrapper.state('calenderFocused')).toBe(focused)
})
