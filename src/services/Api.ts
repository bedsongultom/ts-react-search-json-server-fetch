
//CREATE BY BEDSON GULTOM 8th-FEB-2023                             
class Api {
    get = async ()  =>{
        return  await fetch("http://localhost:3001/items", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
            }
        })
    }

}

export default Api;