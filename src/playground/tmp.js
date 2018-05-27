/*
{
  props.expenses.map( ( expense, index ) => (
    <ExpenseListItem {...expense} 
    key={expense.id} 
    index={index} 
    count={index + 1}
    />
  ))
}

{
  props.expenses.map( ( expense, index ) => (
    <ExpenseListItem {...expense, index}
      key={expense.id}
      count={index + 1}
      description={expense.description}
      amount={expense.amount}
      createdAt={expense.createdAt}
    />
  ))
}
*/
