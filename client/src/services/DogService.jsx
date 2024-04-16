export const getAllDogs=async()=>{
    return await fetch("/api/getAllDogs").then(res=>res.json())
}

export const getDogDetails=async(dogId)=>{
    return await fetch(`/api/getDogDetails/${dogId}`).then(res=>res.json())
}