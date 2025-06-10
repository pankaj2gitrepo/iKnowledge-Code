import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const addExpenseHandler = (expenseData) => {
    const expenseDataAdded = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseDataAdded);
    setIsEditing(false);
  };

  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };

  const cancelExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onAddExpense={addExpenseHandler}
          onCancelExpense={cancelExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
