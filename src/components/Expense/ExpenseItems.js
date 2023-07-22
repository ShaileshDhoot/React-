import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItems.css"

const ExpenseItems = (props) =>{
    const { title, amount, date, location } = props;

    return (
    <Card className="expense-item">     
        
           
           <ExpenseDate date = {date }/>
           <ExpenseDetails title = {title} location = {location} amount = {amount} />
                       
        
   </Card>
   )
   // can only contain one root element per return, if want to add multiple elemnet eclose them in a div
}

export default ExpenseItems