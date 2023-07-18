import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css"

function ExpenseItems (props){
    const { title, amount, date, location } = props;

    return (
    <div className="expense-item"> 
       
        
           
           <ExpenseDate date = {date }/>
           <ExpenseDetails title = {title} location = {location} amount = {amount} />
                       
        
   </div>
   )
   // can only contain one root element per return, if want to add multiple elemnet eclose them in a div
}

export default ExpenseItems