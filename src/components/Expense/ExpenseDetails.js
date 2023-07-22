import "./ExpenseItems.css"
function ExpenseDetails(props){
    const {title, location, amount} = props
    return  <div>
      <div className="expense-item__description">
      <h2>{title}</h2>
        <div>{location}</div> 
        
        <div className="expense-item__price">{amount}</div> 
    </div>
    </div>

}

export default ExpenseDetails