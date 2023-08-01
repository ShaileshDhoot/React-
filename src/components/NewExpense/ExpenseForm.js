import React , {useState} from "react"
import './ExpenseForm.css'
const ExpenseForm = ()=>{ 
    const [enteredTitle, setEnteredTitle] = useState('')
    const [eneteredDate, setEnteredDate] = useState('')
    const [eneteredAmount, setEnteredAmount] = useState('')
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value)
    }
    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }

    return <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Expense Details</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Expense Date</label>
                    <input type="date" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Expense Amount</label>
                    <input type="number" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button>Add Expense</button>
                </div>
            </div>

        </form>

}

export default ExpenseForm


