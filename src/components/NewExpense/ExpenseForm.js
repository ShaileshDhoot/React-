import React from "react"
import './ExpenseForm.css'
const ExpenseForm = ()=>{
    return <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Expense Details</label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>Expense Date</label>
                    <input type="date"/>
                </div>
                <div className="new-expense__control">
                    <label>Expense Amount</label>
                    <input type="number"/>
                </div>
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </div>

        </form>

}

export default ExpenseForm


