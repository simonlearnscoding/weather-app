let conversion = 0 // TODO: Button onclick conversion ++
//Check if browser supports W3C Geolocation API



const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60/nearbyCities',
    params: {radius: '100'},
    headers: {
        'X-RapidAPI-Key': '6bcfec76e2msh03b8b3baf8d518fp163b65jsn147cd1d6e583',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};
async function
fetch(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

async function geolocation() {
    if ("geolocation" in navigator) {
        await navigator.geolocation.getCurrentPosition(successFunction, errorFunct);

        function errorFunct(err) {
            console.log(err)
        }
//Get latitude and longitude;
        function successFunction(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            console.log(lat, long)
        }
    }
    else { console.log('browser no supporto la geolocatione')}

}

geolocation()



function convert(temperature) {
        let temp = temperature - 273
        if(conversion % 2 == 0) {
            return Math.round(temp * 100) / 100
        }
        return cToF(temp)
        function cToF(celsius)
        {
            let cTemp = celsius;
            return Math.round((cTemp * 9 / 5 + 32) * 100) / 100;
        }
    }



async function fetchData(city) {

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=20f7632ffc2c022654e4093c6947b4f4`
        let data = await fetch(url)
        dataToJSON = await data.json()
        if (dataToJSON.cod == "404") {
            console.log("city not found!")
            return
        }
        weatherObj = getData(dataToJSON)
        console.log(weatherObj)
    }
    catch (err) {
        console.error('something went wrong' + err)
        return
    }

    function getData(dataToJSON) {
        const obj = {
            'city' : dataToJSON.name,
            'time' : getDate(dataToJSON.timeZone),
            'main' : dataToJSON.weather[0].main,
            'description' : dataToJSON.weather[0].description,
            'temperature' : convert(dataToJSON.main.temp),
            'wind' : dataToJSON.wind,
            'feels_like' : convert(dataToJSON.main.feels_like),
            'temp_min': convert(dataToJSON.main.temp_min),
            'temp_max' : convert(dataToJSON.main.temp_max),
            'humidiy': `${dataToJSON.main.humidity}%`,
        }
        return obj
        function getDate(timezone) {
            let today = new Date();
            todayOffset = today + timezone
            return`${today.getHours()}:${today.getMinutes()}`
        }

    }
}

// fetchData('Sadgadg')
fetchData(' SAlzburg     ')
fetchData(' Salzburg ')