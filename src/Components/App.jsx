import GoalsForm from "./components/GoalsForm";

function App() {
  const handleAddGoal = (goal) => {
    console.log("Adding goal:", goal);
  };

  return (
    <div>
      <GoalsForm onAddGoal={handleAddGoal} />
    </div>
  );
}
