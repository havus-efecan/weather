///Getting dom elements///
export {displayData,getLocationInput,locationInput, searchButton,}
const locationInput = document.querySelector('input')
const searchButton = document.querySelector('#search-button')
const weather = document.querySelector('#weather')
const location = document.querySelector('#location')
const temp = document.querySelector('#temp')
const date = document.querySelector('#date')
const feels = document.querySelector('#feels')
const wind = document.querySelector('#wind')
const humid = document.querySelector('#humidity')
const rain = document.querySelector('#rain')
const weatherIcon = document.querySelector('#weatherIcon')




function getLocationInput(){
    return locationInput.value
}

function changeBackground(){

}

function displayData(data){

    if(data.hasOwnProperty('error')){
        locationInput.value = 'invalid location'
        console.error()
    }



    const currentDate = new Date();

    const options = { month: 'long' }; 


    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let year = currentDate.getFullYear()
    const month = currentDate.toLocaleString('en-US', options);
    let day = currentDate.getDate()

    let time = `${hour}:${minute} ${month} ${day}`


    const {
        current: { 
            condition: { text, icon},
            temp_c, temp_f, feelslike_c, feelslike_f, humidity, wind_kph, precip_mm,    
        },
        location: { name, region, country} 
    } = data

    weather.innerText = text
    location.innerText = `${name}, ${region} ${country}`
    temp.innerText = temp_c + '° C'
    date.innerText = time
    feels.innerText = "feels like " + feelslike_c +"° C"
    wind.innerText =' ' + wind_kph + " km/hr"
    humid.innerText =' ' + humidity + "% humidity"
    rain.innerText =' ' + precip_mm + " mm of rain"
    weatherIcon.src = icon

    changeBackground()







}

