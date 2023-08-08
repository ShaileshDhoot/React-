import React, { useState } from 'react';

import ExpenseItems from "./ExpenseItems"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpenseFilter"

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })
    
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};


export default Expenses