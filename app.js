const API_KEY = '60465eb34a054ab196685155241508';
const API_BASE = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

//dynamic content;
const degCelcius = document.querySelector("#degCelcius");
const weatherCondition = document.querySelector("#weatherCondition");
const wind = document.querySelector("#wind");
const windDirection = document.querySelector('#windDirection');
const country = document.querySelector("#country");
const weatherImage = document.querySelector("#weatherImage");


document.addEventListener('keydown', (event) => {
    if(event.ctrlKey){
        console.log(event.code);
        const searchTerm = document.querySelector("#searchTerm").textContent;
        if(event.key == 'Enter'){
            fetchAPIResults(searchTerm);
        }
    }
})


const fetchAPIResults = (searchTerm) => {
    const API_CALL = `${API_BASE}&q=${searchTerm}`;
    const fetch_result = fetch(API_CALL)
    .then((response) => response.json())
    .then((json) => {updateContent(json)});

}

const updateContent = (jsonResult) => {
    degCelcius.textContent = jsonResult.current.temp_c;
    weatherCondition.textContent = jsonResult.current.condition.text;
    wind.textContent = jsonResult.current.wind_mph;
    windDirection.textContent = jsonResult.current.wind_dir;
    country.textContent = jsonResult.location.country;
    weatherImage.setAttribute('src', jsonResult.current.condition.icon);
}