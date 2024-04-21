import { useEffect, useState } from "react"
import { deleteWalker, getAllWalkers, getWalkersByCityId } from "../services/WalkerService"
import { getAllCities } from "../services/CityService"
import { Link } from "react-router-dom"

export const ViewAllWalkers=()=>{
    const[allWalkers,setAllWalkers]=useState([])
    const[allCities,setAllCities]=useState([])
    const[filterWalkers,setFilterWalkers]=useState([])
    
    useEffect(()=>{
        getAllWalkers().then((walkersArray)=>{
            setAllWalkers(walkersArray)
            setFilterWalkers(walkersArray)
        })

        getAllCities().then((citiesArray)=>{
            setAllCities(citiesArray)
        })
    },[])

    const handleCityWalker=(event)=>{
        if(event.target.name=="city")
        {
            if(event.target.value==="0")
            {
                setFilterWalkers(allWalkers)
            }
            else
            {
            getWalkersByCityId(event.target.value).then((data)=>{
                setFilterWalkers(data)
            })
        }
        }   
    }

    const removeWalker=(walkerId)=>{
        deleteWalker(walkerId).then()
    }

    return <>
    <h1>View All Walkers</h1>
        <div>
            <select name="city" onChange={handleCityWalker}>
                <option value="0">Select City</option>
                {allCities.map((city)=>{
                    return (<option value={city.id} key={city.id}>{city.name}</option>)
                })}
            </select>
        </div>
        <div>
            {
            filterWalkers.map((walker)=>{
                return (
                <div key={walker.id}>
                    <div><Link to={`/updateWalker/${walker.id}`} style={{marginRight: '25px'}}>{walker.name}</Link>    
                     <Link to={`/walkers/${walker.id}`} style={{marginRight: '25px'}}>Assign Dog</Link> 
                     <button onClick={()=>removeWalker(walker.id)}>Remove</button> </div>
                 
                </div>
                )
            })
        }
        </div>
    </>
}