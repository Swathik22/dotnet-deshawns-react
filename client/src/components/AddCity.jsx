import { useEffect, useState } from "react"
import { getAllCities, addCity } from "../services/CityService"
import  "./styles.css"
import { useNavigate } from "react-router-dom"

export const AddCity=()=>{
    const[cities,setCities]=useState([])
    const[newCity,setNewCity]=useState("")

    const navigate=useNavigate()

    useEffect(()=>{
        getAllCities().then((data)=>{
            setCities(data)
        })
    },[])

    const handleInputChanges=(event)=>{
        if(event.target.name==="city")
        {
            setNewCity(event.target.value)
        }
    }

    const handleAddCity=(event)=>{
        event.preventDefault()
        const cityObj={
            name:newCity
        }
        addCity(cityObj).then(()=>{
            navigate("/city")
        }  )
       
          
    }
    
    return <>
          <div>
               Enter a City Name: <input name="city" placeholder="Enter a City" onChange={handleInputChanges}></input>
               <button name="btnCity" onClick={handleAddCity}>Add</button>
            </div>
            <div>
                {
                    cities.map(city=>{
                        return (
                            <div key={city.id}>
                                {city.name}
                            </div>
                        )
                    })
                }                
            </div>    
           
    </>
}