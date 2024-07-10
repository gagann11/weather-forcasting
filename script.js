const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '02608944a2mshf3c25d3b4abd921p1458d0jsn19b1c0dbbaa4',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
};
const getweather = (city) => {
    cityName.innerHTML = cityName
    fetch("https://forecast9.p.rapidapi.com/" +city, option)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            tem.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            Sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
    }

    sumbit.addEventListener("click", (e)=>
    {
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi")