import ExpenseItem from "./components/ExpenseItem";
import Input from "./components/EnterExpense";

function App() {
  const expense = [
    {
      id: "0e2",
      title: "laptop ram",
      amount: "10",
      date: new Date(2023, 2, 18),
    },
    {
      id: "2w1",
      title: "new laptop",
      amount: "140",
      date: new Date(2023, 12, 15),
    },
    { id: "4q1", title: "new phone", amount: "60", date: new Date(2024, 1, 1) },
    { id: "9f3", title: "case", amount: "1000", date: new Date(2024, 10, 1) },
  ];
  const AmountDatas = (amounts) => {
    const Expenses = {
      ...amounts,
      V: "hu",
    };
    console.log(Expenses);
  };

  return (
    <div>
      <h2>Let's get started! </h2>
      <Input onAmount={AmountDatas}></Input>
      <div className="allBoxes">
        {expense.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </div>
    </div>
  );
}

export default App;
