function ExpenseItems (){
    return (
    <div className="expense-item"> 
        <div>18 july 2023</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">8500</div>             
        </div>
   </div>
   )
   // can only contain one root element per return, if want to add multiple elemnet eclose them in a div
}

export default ExpenseItems