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
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },

        
      ];
    return (<div> 
      <Card className="expenses">
            {expenses.map((expense) => ( <div>
              <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseItems
            date = {expense.date}
            title={expense.title}
            amount={expense.amount}
          
        />
        </div>
      ))}
    </Card>
    </div>)
}

export default Expenses