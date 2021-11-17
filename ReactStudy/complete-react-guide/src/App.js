import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { id: 1, title: "Paper", amount: 11.2, date: new Date(2021, 2, 11) },
    { id: 2, title: "Pencil", amount: 15.2, date: new Date(2021, 2, 15) },
    { id: 3, title: "Eraser", amount: 18.2, date: new Date(2021, 2, 18) },
  ];

  const addExpenseHandler = (expenseDataAdded) => {
    console.log(`App.js expenseDataAdded`);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
