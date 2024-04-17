export const getAllCities=async()=>{
    return await fetch("/api/getAllCities").then(res=>res.json())
}