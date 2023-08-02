import React , {useState} from "react"
import './ExpenseForm.css'
const ExpenseForm = ()=>{ 

    const [enteredTitle, setEnteredTitle] = useState('')
    const [eneteredDate, setEnteredDate] = useState('')
    const [eneteredAmount, setEnteredAmount] = useState('')

    // const  [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     eneteredDate: '',
    //     eneteredAmount: '',
    // })
    // usrin spread operator because to copy the values 
    const titleChangeHandler = (event)=>{
            setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // this method gurantees that the previous state is the latest state , but not in above case
        // setUserInput((prevState)=>{
        //     return { ...prevState,enteredTitle: event.target.value }
        // })
    }
    const dateChangeHandler = (event)=>{
            setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     eneteredDate: event.target.value
        // })
    }
    const amountChangeHandler = (event)=>{
            setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     eneteredAmount: event.target.value
        // })
    }

    const sumitHandler = (e) =>{
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            date: new Date(eneteredDate),
            amount: eneteredAmount,
        }
        console.log(expenseData)

    }

    return <form onSubmit={sumitHandler}>
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
                    <button type="submit">Add Expense</button>
                </div>
            </div>

        </form>

}

export default ExpenseForm


