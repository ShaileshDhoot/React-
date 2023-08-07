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
    
    return (<div> 
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {props.items.map(expense => ( 
              
            <ExpenseItems
            key = {expense.id}
            date = {expense.date}
            title={expense.title}
            amount={expense.amount}
          
        />
      ))}
    </Card>
    </div>)
}

export default Expenses