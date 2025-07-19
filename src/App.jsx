import { useState } from "react";
import GoalForm from "./Components/GoalForm";
import GoalList from "./Components/GoalList";
import Overview from "./Components/Overview";

function App() {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (goal) => {
    const newGoalWithId = { ...goal, id: Date.now() };
    setGoals([...goals, newGoalWithId]);
  };

  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      {goals.length > 0 && (
        <>
          <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
          <Overview goals={goals} />
        </>
      )}
    </div>
  );
}

export default App;

