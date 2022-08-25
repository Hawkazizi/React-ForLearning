import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        id={expense[0].id}
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[1].id}
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[2].id}
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        id={expense[3].id}
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
