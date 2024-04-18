export const getAllDogs=async()=>{
    return await fetch("/api/getAllDogs").then(res=>res.json())
}

export const getDogDetails=async(dogId)=>{
    return await fetch(`/api/getDogDetails/${dogId}`).then(res=>res.json())
}

export const addNewDog=async(newDog)=>{
    const postDetails={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(newDog)
    }
    return await fetch("/api/addNewDog",postDetails).then(res=>res.json())
}

export const getDogsByWalkerId=async(walkerId)=>{
    return await fetch(`/api/getAllDogsInWalkersCity/${walkerId}`).then(res=>res.json())
}

export const updateWalkerToADog=async(walkerId,dogObj)=>{
    return await fetch(`/api/assignWalkerToADog/${walkerId}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(dogObj)
    }).then(res=>res.json())
}