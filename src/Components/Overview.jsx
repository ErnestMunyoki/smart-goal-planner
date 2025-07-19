function Overview({ goals = [] }) {
  const total = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const saved = goals.reduce((sum, g) => sum + g.savedAmount, 0);

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Target: ${total}</p>
      <p>Total Saved: ${saved}</p>
    </div>
  );
}

export default Overview;

