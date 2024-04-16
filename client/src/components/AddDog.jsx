import { useState } from "react"
import { addNewDog } from "../services/DogService"
import { useNavigate } from "react-router-dom"

export const AddDog=()=>{
    const[name,setName]=useState("")
    const navigate=useNavigate()

    const handleInputChange=(event)=>{
        if(event.target.name==="name")
        {
            setName(event.target.value)
        }
    }
    
    const handleSaveDog=(event)=>{
        event.preventDefault()

        const dogObj={
            name:name
        }

        addNewDog(dogObj).then(
            navigate("/")
        )
    }
    return <>
    <div>
        <div>Enter Dog Name: <input type="text" name="name" onChange={handleInputChange}/></div>
        <div><button onClick={handleSaveDog}>Save</button></div>
    </div>
    </>
}