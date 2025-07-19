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
            <div><button>Delete</button></div>
        </div>
    )
}

export default GoalsForm