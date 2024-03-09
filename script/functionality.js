function handlingResponse(event){
    event.preventDefault();

    let cityValue = document.querySelector("#search-input");
    // document.querySelector("#city-name").textContent = cityValue.value
    let displayedCity = document.querySelector("#city-name");
    displayedCity.innerHTML = cityValue.value;


}


let formInput = document.querySelector("#form1");
formInput.addEventListener("submit", handlingResponse);