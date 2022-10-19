let conversion = 0 // TODO: Button onclick conversion ++
//Check if browser supports W3C Geolocation API


async function getCity(coordinates) {
    function formatCoordinates(coordinates) {
        function isPositive(num) {
            return num > 0? '+' : ''
        }
        const long = `${isPositive(coordinates.long)}${coordinates.long}`
        const lat = `${isPositive(coordinates.lat)}${coordinates.lat}`
        const string = lat + long
        return string

    }
    const coord = formatCoordinates(coordinates)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6bcfec76e2msh03b8b3baf8d518fp163b65jsn147cd1d6e583',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${coord}/nearbyCities?radius=100`
    try {

        const response = await fetch(url, options)
        const data = await response.json()
        const city = data.data[0].city;
        return city
    }
    catch (e) {
        console.log(e)
    }
}

async function geolocation() {
    if (!("geolocation" in navigator))
        // lat 43.000000 TODO: default = New York
        //long -75.000000
    { return console.log('browser no supporto la geolocatione')}
    const coords = await getPos()
    return intoCoordinates(coords)

    function getPos() {
        return new Promise((success, error) => { navigator.geolocation.getCurrentPosition(success, error)})
    }
    function intoCoordinates(position) {
        const lat = position.coords.latitude
        const coordinates = {
            lat : position.coords.latitude,
            long : position.coords.longitude,
        }
        return coordinates
    }
}

const getWeatherOfMyCity = async () => {
    try {

        const coordinates = await geolocation()
        const city = await getCity(coordinates)
        const weatherObject = await fetchWeatherData(city)
        return weatherObject
    }
    catch (err) {
        console.log(err)
    }

}
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
async function fetchWeatherData(city) {

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=20f7632ffc2c022654e4093c6947b4f4`
        let data = await fetch(url)
        const dataToJSON = await data.json()
        if (dataToJSON.cod == "404") {
            console.log("city not found!")
            return
        }
        const weatherObj = getData(dataToJSON)
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

export {getWeatherOfMyCity}