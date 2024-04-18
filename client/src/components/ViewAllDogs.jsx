import { useState,useEffect } from "react"
import { getAllDogs } from "../services/DogService"
import { Link, useNavigate } from "react-router-dom"

export const ViewAllDogs=()=>{
    const[allDogsList,setAllDogsList]=useState([])
    const navigate=useNavigate()
        useEffect(()=>{
            getAllDogs().then(allDogs=>{
                setAllDogsList(allDogs)
            }
            )
        }      
    ,[allDogsList])

    const handleNavigateToAddDog=()=>{
        navigate("/addDog")
    }
    return <>
    <h4>View All Dogs</h4>
    <div>   
        <button onClick={handleNavigateToAddDog}>Add Dog</button>    
    </div>
      <div> 
            {
            allDogsList.map(dog=>{                   
                return (
                    <div>
                        <div key={dog.id}><Link to={`/${dog.id}`}>{dog.name}</Link></div>
                        </div>
                      )             
            }
                
            )
            }
     </div>
    </>
}