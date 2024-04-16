import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDogDetails } from "../services/DogService"

export const ViewDogDetails=()=>{
    const[dogDetails,setDogDetails]=useState({})
    const {dogId}=useParams()

    useEffect(()=>{
        getDogDetails(dogId).then((data)=>{            
            setDogDetails(data)
        })
    },[dogId])
    return <>
        <div>
            <div>Dog: {dogDetails.name}</div>
            <div>Walker: {dogDetails.walker?dogDetails.walker.name:"No Walker Assigned"}</div>
        </div>
    </>
}