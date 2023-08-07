
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  
    const addExpenseHandler = expense =>{
      console.log(expense)
    }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses/>

    </div>
  );
}

export default App;
