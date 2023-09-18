import { callAPI } from "./api.js";
import { locationInput, getLocationInput,searchButton,displayData } from "./dom.js"



let location

locationInput.addEventListener('keypress', async function(event){

    if(event.key === 'Enter'){
       location = getLocationInput()
       let data = await logAPICall(location)

       displayData(data)


    }

})

  async function logAPICall(city){

    return callAPI(city)
    .then(function(response){
        return response
    })

}

searchButton.addEventListener('click', async function(event){

    location = getLocationInput()
    let data = await logAPICall(location)

    displayData(data)



})


async function initialLoad(){

    let data = await logAPICall('london')

    displayData(data)
}

initialLoad()













