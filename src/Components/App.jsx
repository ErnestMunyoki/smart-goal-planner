import GoalForm from "./components/GoalsForm";

function App() {
  const handleAddGoal = (goal) => {
    console.log("Adding goal:", goal);
  };

  return (
    <div>
      <GoalForm onAddGoal={handleAddGoal} />
    </div>
  );
}
