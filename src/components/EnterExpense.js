import { useState } from "react";
import "./EnterExpense.css";

function Input() {
  const [enterdTitle, setEnteredTitle] = useState("");
  //Change Handler
  function changeHandler(event) {
    setEnteredTitle(event.target.value); //Saving data somewhere
    console.log(event.target.value);
  }

  //submit Handler
  function submitHandler(e) {
    e.preventDefault();
    const expenseData = {
      title: enterdTitle,
    };
    console.log(expenseData);
    setEnteredTitle("");
  }

  //XML
  return (
    <form onSubmit={submitHandler}>
      {/* When Submit button is clicked this property takes action (oneSubmit)*/}
      <div>
        <input
          type="text"
          value={enterdTitle}
          onChange={changeHandler}
          className="inputStyle"
        ></input>
      </div>
      <div>
        <button type="submit" className="submitButton">
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default Input;
