import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getDogsByWalkerId, updateWalkerToADog } from "../services/DogService"

export const AssignDogToWalker=()=>{
    const[allDogs,setAllDogs]=useState([])
    const {walkerId}=useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        getDogsByWalkerId(walkerId).then((data)=>{
            setAllDogs(data)
        })
    },[])

    const handleUpdateWalker=(event)=>{
      const dogObj={
        id:event.target.name,
        name:event.target.innerText,}
        updateWalkerToADog(walkerId,dogObj).then(
            navigate("/:dogId")
        )
    }

    return <>
    {
       allDogs.map(dog=>{
            return(
                <div>
                <Link to={`/${dog.id}`} name={dog.id} onClick={handleUpdateWalker}>{dog.name}</Link>
                </div>
            )
       })
    }
    </>
}