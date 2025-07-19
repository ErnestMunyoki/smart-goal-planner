function GoalList({goals, onDeleteGoal}) {
    return(
        <div>
             <h2>Your Goals</h2>
             {goals.length === 0 ? (
                <p>No goals yet</p>
             ) : (
                goals.map((goal) => (
                    <div key={goal.id}>
                       <h3>{goal.name}</h3>
                        <p>Target: ${goal.targetAmount}</p>
                        <p>Saved: ${goal.savedAmount}</p>
                        <p>Remaining: ${goal.targetAmount - goal.savedAmount}</p>
                        <p>Deadline: {goal.deadline}</p>
                        <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
                    </div>
                ))
             )
            }
        </div>
    )
}

export default GoalList