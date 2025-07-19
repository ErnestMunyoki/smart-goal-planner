import { useState } from "react"

function GoalsForm({onAddGoal}){

    const [formData, setFormData] = useState({
        name:"",
        targetAmount:"",
        category:"",
        deadline:""
    })

function changeAction(e){
        setFormData({ ...formData, [e.target.name]: e.target.value });
}

function submitAction(e){
    e.preventDefault();
    const newGoal = {
        name: formData.name,
        targetAmount: parseFloat(formData.targetAmount),
        category: formData.category,
        deadline: formData.deadline,
        savedAmount: 0
    };
    onAddGoal(newGoal)
    setFormData({name:"", targetAmount:"", category:"", deadline:""})
}

    return(
        <div>
            <form onSubmit={submitAction}>
                <h1>Add New Goal</h1>
                <input name="name" placeholder="Goal name" value={formData.name || ""} onChange={changeAction}/>
                <input name="targetAmount" placeholder="Target Amount" value={formData.targetAmount ||""} onChange={changeAction} />
                <input name="category" placeholder="Category" value={formData.category ||""} onChange={changeAction} />
                <input name="deadline" placeholder="Deadline (DD-MM-YYYY)" value={formData.deadline ||""} onChange={changeAction}/>
                <button type="Submit">Add Goal</button>
            </form>
        </div>
    )
}

export default GoalsForm