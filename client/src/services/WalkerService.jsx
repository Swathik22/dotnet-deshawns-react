export const getAllWalkers=async()=>{
    return await fetch("/api/getAllWalkers").then(res=>res.json())
}

export const getWalkersByCityId=async(cityId)=>{
    return await fetch(`/api/getWalkersByCityId/${cityId}`).then(res=>res.json())
}