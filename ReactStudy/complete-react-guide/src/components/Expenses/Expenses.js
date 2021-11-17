import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearChangeHandler = (filterYear) => {
    console.log(`Expenses`);
    console.log(filterYear);
    setFilterYear(filterYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYearChange={filterYearChangeHandler}
      />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.title}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
