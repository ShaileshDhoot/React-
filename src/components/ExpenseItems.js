import "./ExpenseItems.css"

function ExpenseItems (props){
    const { title, amount, date, location } = props;
    const month = date.getMonth()+1
    const day = date.getDate()
    const year = date.getFullYear()
    return (
    <div className="expense-item"> 
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        <div>{location}</div> 
        <div className="expense-item__description">
            <h2>{title}</h2>
           
            <div className="expense-item__price">{amount}</div> 
                       
        </div>
   </div>
   )
   // can only contain one root element per return, if want to add multiple elemnet eclose them in a div
}

export default ExpenseItems