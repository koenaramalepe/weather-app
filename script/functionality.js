function searchCity(city){
    let apiKey = "b43bc25t07dffbba80b4fec67770a5o8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    console.log(apiUrl);
   
}
function handlingResponse(event){
    event.preventDefault();
    let cityValue = document.querySelector("#search-input").value;
    console.log(cityValue)
    // document.querySelector("#city-name").textContent = cityValue.value
    let displayedCity = document.querySelector("#city-name");
    displayedCity.innerHTML = cityValue.value;
    searchCity(cityValue);
}

let formInput = document.querySelector("#form1");
formInput.addEventListener("submit", handlingResponse);