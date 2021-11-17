import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterYearChangeHandler = (filterYear) => {
    setFilterYear(filterYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onFilterYearChange={filterYearChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
