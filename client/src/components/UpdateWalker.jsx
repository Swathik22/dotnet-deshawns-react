import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCitiesByWalkerId, updateCitiesForWalker } from "../services/WalkerService"

export const UpdateWalker=()=>{
    const[cities,setCities]=useState([])
    const[walkerDetails,setWalkerDetails]=useState([])
    const[selectedCity,setSelectedCity]=useState([])
    const {walkerId}=useParams()

    const navigate=useNavigate()

    useEffect(()=>{
        getCitiesByWalkerId(walkerId).then(data=>{
            setCities(data.cityList)
            setWalkerDetails(data)
            setSelectedCity(data.cityList.map(city => city.id))
                     
        })
    },[walkerId])

    const handleChange=(event)=>{   
        let isSelected=event.target.checked
        let value=parseInt(event.target.value)
        
        if (isSelected) {
            setSelectedCity([...selectedCity, value]);
        } else {
            setSelectedCity((cityObj)=>{
                return cityObj.filter((id => id !== value))
            });
        }
    }

    const handleUpdate=(event)=>{
        event.preventDefault()
        // console.log(selectedCity,walkerDetails)
        if(event.target.name==="btnWalker")
        {
            walkerDetails.cityList = walkerDetails.cityList.filter(city => selectedCity.includes(city.id));
        }
        updateCitiesForWalker(walkerDetails).then(
            navigate("/walkers")
        )
       
    }
    

    return <>
        <h4>Update Walker</h4>
        {cities.map(city=>{    
            return (   
                <div key={city.id}>  
            <input
                type="checkbox"
                value={city.id}
                checked={selectedCity.includes(city.id)} 
                        
                onChange={handleChange}              
            />
            <label>{city.name}</label>
           
            </div> 
        )})        
        }
        <button name="btnWalker" onClick={handleUpdate}>Update</button>
    </>
}