import { useState } from "react"

function GoalsForm(){

    const [formData, setFormData] = useState({
        Name:"",
        Targetamount:"",
        Category:"",
        Deadline:""
    })

function changeAction(e){
    setFormData({formData,[e.target.name]: e.target.value})
}

function submitAction(e){
    e.preventDefault();
    const newGoal = {
        formData,
        Targetamount: parseFloat(formData.Targetamount),
        savedAmount: 0,
    }
    onAddGoal(newGoal)
    setFormData({name:"", Targetamount:"", Category:"", Deadline:""})
}

    return(
        <div>
            <form onSubmit={submitAction}>
                <h1>Add New Goal</h1>
                <input name="name" placeholder="Goal name" value={formData.Name} onChange={changeAction}/>
                <input name="Targetamount" placeholder="Target Amount" value={formData.Targetamount} onChange={changeAction} />
                <input name="Category" placeholder="Category" value={formData.Category} onChange={changeAction} />
                <input name="Deadline" placeholder="Deadline (DD-MM-YYYY)" value={formData.Deadline} onChange={changeAction}/>
                <button type="Submit">Add Goal</button>
            </form>
        </div>
    )
}

export default GoalsForm