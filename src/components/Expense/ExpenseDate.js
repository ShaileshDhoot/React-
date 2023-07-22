import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    const {date} = props
    const month = date.getMonth()+1
    const day = date.getDate()
    const year = date.getFullYear()
    return <div className="expense-date">
        
    <div className="expense-date__day">{day}</div>
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    </div>
}

export default ExpenseDate