import { callAPI } from "./api.js";
import { locationInput, getLocationInput } from "./dom.js"

let location

locationInput.addEventListener('keypress', async function(event){

    if(event.key === 'Enter'){
        location = getLocationInput()
       let x = await logAPICall(location)
       console.log(x)
    }

})

  async function logAPICall(city){

    return callAPI(city)
    .then(function(response){
        return response
    })

}

// let apiData = await logAPICall()


// console.log(apiData)






