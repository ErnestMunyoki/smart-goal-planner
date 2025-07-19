import { useState } from "react";
import GoalForm from "./Components/GoalForm";
import GoalList from "./Components/GoalList";

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


}

export default App;


