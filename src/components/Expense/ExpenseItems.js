import ExpenseDate from "./ExpenseDate";
import React , { useState } from "react"
import ExpenseDetails from "./ExpenseDetails";
import Expenses from "./Expenses";
import Card from "../UI/Card";
import "./ExpenseItems.css"

const ExpenseItems = (props) =>{


    const [title, newTitle] = useState(props.title)

    const {  amount, date, location } = props;

    const clickHandler=()=>{
        newTitle('Updated')
        console.log(title)
    }
    const deleteHandler = ()=>{
        console.log(typeof(Expenses))
    }
    return (
    <Card className="expense-item">     
        
           
           <ExpenseDate date = {date }/>
           <ExpenseDetails title = {title} location = {location} amount = {amount} />
          <button onClick={clickHandler}>Change title</button>
          <button onClick={deleteHandler}>Delete</button>
                       
        
   </Card>
   )
   // can only contain one root element per return, if want to add multiple elemnet eclose them in a div
}

export default ExpenseItems