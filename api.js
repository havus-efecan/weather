


export async function callAPI(location){




    let url = `https://api.weatherapi.com/v1/current.json?key=d7463250ef464acabf8151005231509&q=${location}&aqi=no`

    return fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        return data
    })
    .catch(function(err){
        console.log(err)
    })

}


