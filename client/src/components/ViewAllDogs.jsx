import { useState,useEffect } from "react"
import { getAllDogs } from "../services/DogService"
import { Link } from "react-router-dom"

export const ViewAllDogs=()=>{
    const[allDogsList,setAllDogsList]=useState([])
        useEffect(()=>{
            getAllDogs().then(allDogs=>{
                setAllDogsList(allDogs)
            }
            )
        }      
    ,[])
    return <>
    <h4>View All Dogs</h4><div>       
      </div>
      <div> 
            {
            allDogsList.map(dog=>{                   
                return (
                   <div>
                    <div><Link to={`/${dog.id}`}>{dog.name}</Link></div>
                  
                   </div>
                      )             
            }
                
            )
            }
     </div>
    </>
}