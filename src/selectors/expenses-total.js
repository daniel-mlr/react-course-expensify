// expenses-total.js

const reducer = (accumulator, currentValue) => accumulator + currentValue
export default (expenses) => expenses.map( exp => exp.amount).reduce(reducer, 0)
