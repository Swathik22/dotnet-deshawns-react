export const getAllWalkers=async()=>{
    return await fetch("/api/getAllWalkers").then(res=>res.json())
}

export const getWalkersByCityId=async(cityId)=>{
    return await fetch(`/api/getWalkersByCityId/${cityId}`).then(res=>res.json())
}

export const getCitiesByWalkerId=async(walkerId)=>{
    return await fetch(`/api/walkersCities/${walkerId}`).then(res=>res.json())
}

export const updateCitiesForWalker=async(cityObj)=>
{
    return await fetch(`/api/walkerCityUpdate/`,{
        method:"PUT",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(cityObj)
    }).then(res=>res.json())
}