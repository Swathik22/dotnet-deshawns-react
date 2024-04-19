export const getAllCities=async()=>{
    return await fetch("/api/getAllCities").then(res=>res.json())
}

export const addCity=async(cityObj)=>{
    return await fetch('/api/city',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(cityObj)
    }).then(res=>res.json())
}