import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const addExpenseHandler = (expenseData) => {
    const expenseDataAdded = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataAdded);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
