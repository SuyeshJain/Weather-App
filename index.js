var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

const apik = "9374e4a6ccfb847ea79db0a0306c2f82"

function convertion(val) {
    return (val - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid=' +apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name']
            var description = data['weather'][0]['description'] // Access description directly
            var temperature = data['main']['temp']
            var windSpeed = data['wind']['speed']

            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>` // Fix temperature formatting
            descrip.innerHTML = `Sky Conditions: <span>${description}</span>` // Fix missing equal sign
            wind.innerHTML = `Wind Speed: <span>${windSpeed} Km/h</span>`
            document.querySelector(".display").style.display='block'
        })
        .catch(err => alert('You Entered Wrong City Name'))
})
