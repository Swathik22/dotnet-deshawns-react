export const getAllDogs=async()=>{
    return await fetch("/api/getAllDogs").then(res=>res.json())
}