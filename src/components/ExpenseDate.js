function ExpenseDate(props){
    const {date} = props
    const month = date.getMonth()+1
    const day = date.getDate()
    const year = date.getFullYear()
    return <div>
        
    <div>{day}</div>
    <div>{month}</div>
    <div>{year}</div>
    </div>
}

export default ExpenseDate