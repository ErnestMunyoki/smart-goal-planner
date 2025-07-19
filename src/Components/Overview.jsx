function Overview({ goals = [] }) {
  const total = goals.reduce((sum, g) => sum + g.targetAmount, 0);
  const saved = goals.reduce((sum, g) => sum + g.savedAmount, 0);

 
}

export default Overview;

