import { useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";

function App() {
  const [goals, setGoals] = useState([]); 

  const handleAddGoal = (goal) => {
    const newGoalWithId = { ...goal, id: Date.now() };     
    setGoals([...goals, newGoalWithId]);
    console.log("New Goal Submitted:", newGoalWithId);
  };

  const handleDeleteGoal = (id) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(updatedGoals);
  };

  return (
    <div>
      <h1>Smart Goal Planner</h1>
      <GoalForm onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </div>
  );
}

export default App;


