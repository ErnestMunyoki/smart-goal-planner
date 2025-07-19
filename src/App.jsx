import { useState } from "react";
import GoalForm from "./Components/GoalForm";
import GoalList from "./Components/GoalList";
import DepositForm from "./Components/DepositForm";
import Overview from "./Components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  function addGoal(goal) {
    const newGoal = { ...goal, id: Date.now() };
    setGoals([...goals, newGoal]);
  }

  function deleteGoal(id) {
    setGoals(goals.filter(goal => goal.id !== id));
  }

  function addDeposit(goalId, amount) {
    setGoals(goals.map(goal =>
      goal.id === goalId
        ? { ...goal, savedAmount: goal.savedAmount + amount }
        : goal
    ));
  }

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={addGoal} />
      <Overview goals={goals} />
      {goals.map(goal => (
        <DepositForm key={goal.id} goalId={goal.id} onAddDeposit={addDeposit} />
      ))}
      <GoalList goals={goals} onDeleteGoal={deleteGoal} />
    </div>
  );
}

export default App;
