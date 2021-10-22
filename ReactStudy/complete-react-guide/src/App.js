import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Paper", amount: 11.2, date: new Date(2021, 2, 11) },
    { title: "Pencil", amount: 15.2, date: new Date(2021, 2, 15) },
    { title: "Eraser", amount: 18.2, date: new Date(2021, 2, 18) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
