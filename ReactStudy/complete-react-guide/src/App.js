import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "Paper", amount: 11.2, date: new Date(2021, 2, 11) },
    { title: "Pencil", amount: 15.2, date: new Date(2021, 2, 15) },
    { title: "Eraser", amount: 18.2, date: new Date(2021, 2, 18) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
