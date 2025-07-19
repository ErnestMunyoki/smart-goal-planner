import GoalForm from "./components/GoalForm";

function App() {
  const handleAddGoal = (goal) => {
    console.log("New Goal Submitted:", goal);
  };

  return (
    <div>
      <GoalForm onAddGoal={handleAddGoal} />
    </div>
  );
}

export default App;

