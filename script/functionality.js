function updateWeatherData(response){   
    let temperatureElement = document.querySelector("#temperature")
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    let displayedCity = document.querySelector("#city-name");
    displayedCity.innerHTML = response.data.city
    
}

function searchCity(city){
    let apiKey = "b43bc25t07dffbba80b4fec67770a5o8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeatherData);
   
}
function handlingResponse(event){
    event.preventDefault();
    let cityValue = document.querySelector("#search-input");
    
    searchCity(cityValue.value);
}

let formInput = document.querySelector("#form1");
formInput.addEventListener("submit", handlingResponse);

searchCity("Polokwane");