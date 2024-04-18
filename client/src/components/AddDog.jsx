import { useEffect, useState } from "react"
import { addNewDog } from "../services/DogService"
import { useNavigate } from "react-router-dom"
import { getAllCities } from "../services/CityService"

export const AddDog=()=>{
    const[name,setName]=useState("")
    const[allCities,setAllCities]=useState([])
    const[city,setCity]=useState(0)
    const navigate=useNavigate()

    useEffect(()=>{
        getAllCities().then((data)=>{
            setAllCities(data)
        })
    },[])

    const handleInputChange=(event)=>{
        if(event.target.name==="name")
        {
            setName(event.target.value)
        }
        if(event.target.name==="city")
        {
            setCity(event.target.value)
        }
    }
    
    const handleSaveDog=(event)=>{
        event.preventDefault()

        const dogObj={
            name:name,
            cityId:city
        }

        addNewDog(dogObj).then(
            navigate("/")
        )
    }
    return <>
    <div>
        <div>Enter Dog Name: <input type="text" name="name" onChange={handleInputChange}/></div>
        <div>Select City: 
            <select name="city" onChange={handleInputChange}>
                <option value="0">Select City</option>
                {
                    allCities.map(city=>{
                        return (
                            <option value={city.id}>{city.name}</option>
                        )
                    })
                }
            </select>
        </div> 
        <div><button onClick={handleSaveDog}>Save</button></div>
    </div>
    </>
}