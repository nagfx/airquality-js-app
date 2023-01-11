// Set pointers to specific tags with ID and Classes
var currentForecast = document.querySelector(".forecastInfo")
var currentHeader = document.querySelector(".currentForecastHeader")
var tomorrowHeader = document.querySelector(".tomorrowForecastHeader")
var tomorrowForecast = document.querySelector(".tomorrowForecastInfo")
var disclaimer = document.querySelector("#disclaimer-text")
// Pointer for the api of Air Quality from Transport For London
const API_URL = "https://api.tfl.gov.uk/AirQuality/"

// Fetching and storing it as a json the api
async function getAirQuality() {
    const response = await fetch(API_URL)
    const results = await response.json()
    // Checking in console that if the data is accessible and stored properly into results variable
    console.log(results)

// Upon running of this function the following changes are made and reflected on the website. The function is supposed to run upon clicking button
// The button in forecast section in the index.html uses onclick
        currentForecast.innerHTML = results.currentForecast[0].forecastSummary
        currentHeader.innerHTML = "Today's forecast"
        disclaimer.innerHTML = results.disclaimerText
        tomorrowHeader.innerHTML = "Forecast for tomorrow"
        tomorrowForecast.innerHTML = results.currentForecast[1].forecastSummary

    }

