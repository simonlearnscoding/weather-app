"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/apiCalls */ "./src/modules/apiCalls.js");


console.log('hi theoore')

console.log((0,_modules_apiCalls__WEBPACK_IMPORTED_MODULE_0__.getWeatherOfMyCity)());





/***/ }),

/***/ "./src/modules/apiCalls.js":
/*!*********************************!*\
  !*** ./src/modules/apiCalls.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherOfMyCity": () => (/* binding */ getWeatherOfMyCity)
/* harmony export */ });
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
        const city = checkIfInWeatherAPI(data)

        return city

        async function checkIfInWeatherAPI(data, x=0) {
            const city = data.data[x].city
            if(console.log(fetchWeatherData(city)) === true) { return city}
            checkIfInWeatherAPI(data, x+1)
         }
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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBc0Q7O0FBRXREOztBQUVBLFlBQVkscUVBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKOUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkIsRUFBRSxpQkFBaUI7QUFDeEUsdUJBQXVCLDRCQUE0QixFQUFFLGdCQUFnQjtBQUNyRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxNQUFNO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQseURBQXlEO0FBQzFHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsS0FBSztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUIsR0FBRyxtQkFBbUI7QUFDNUQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvYXBpQ2FsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRXZWF0aGVyT2ZNeUNpdHl9IGZyb20gXCIuL21vZHVsZXMvYXBpQ2FsbHNcIjtcblxuY29uc29sZS5sb2coJ2hpIHRoZW9vcmUnKVxuXG5jb25zb2xlLmxvZyhnZXRXZWF0aGVyT2ZNeUNpdHkoKSk7XG5cblxuXG4iLCJsZXQgY29udmVyc2lvbiA9IDAgLy8gVE9ETzogQnV0dG9uIG9uY2xpY2sgY29udmVyc2lvbiArK1xuLy9DaGVjayBpZiBicm93c2VyIHN1cHBvcnRzIFczQyBHZW9sb2NhdGlvbiBBUElcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRDaXR5KGNvb3JkaW5hdGVzKSB7XG4gICAgZnVuY3Rpb24gZm9ybWF0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgZnVuY3Rpb24gaXNQb3NpdGl2ZShudW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudW0gPiAwPyAnKycgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvbmcgPSBgJHtpc1Bvc2l0aXZlKGNvb3JkaW5hdGVzLmxvbmcpfSR7Y29vcmRpbmF0ZXMubG9uZ31gXG4gICAgICAgIGNvbnN0IGxhdCA9IGAke2lzUG9zaXRpdmUoY29vcmRpbmF0ZXMubGF0KX0ke2Nvb3JkaW5hdGVzLmxhdH1gXG4gICAgICAgIGNvbnN0IHN0cmluZyA9IGxhdCArIGxvbmdcbiAgICAgICAgcmV0dXJuIHN0cmluZ1xuXG4gICAgfVxuICAgIGNvbnN0IGNvb3JkID0gZm9ybWF0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ1gtUmFwaWRBUEktS2V5JzogJzZiY2ZlYzc2ZTJtc2gwM2I4YjNiYWY4ZDUxOGZwMTYzYjY1anNuMTQ3Y2QxZDZlNTgzJyxcbiAgICAgICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnd2Z0LWdlby1kYi5wLnJhcGlkYXBpLmNvbSdcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vd2Z0LWdlby1kYi5wLnJhcGlkYXBpLmNvbS92MS9nZW8vbG9jYXRpb25zLyR7Y29vcmR9L25lYXJieUNpdGllcz9yYWRpdXM9MTAwYFxuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc3QgY2l0eSA9IGNoZWNrSWZJbldlYXRoZXJBUEkoZGF0YSlcblxuICAgICAgICByZXR1cm4gY2l0eVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrSWZJbldlYXRoZXJBUEkoZGF0YSwgeD0wKSB7XG4gICAgICAgICAgICBjb25zdCBjaXR5ID0gZGF0YS5kYXRhW3hdLmNpdHlcbiAgICAgICAgICAgIGlmKGNvbnNvbGUubG9nKGZldGNoV2VhdGhlckRhdGEoY2l0eSkpID09PSB0cnVlKSB7IHJldHVybiBjaXR5fVxuICAgICAgICAgICAgY2hlY2tJZkluV2VhdGhlckFQSShkYXRhLCB4KzEpXG4gICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZW9sb2NhdGlvbigpIHtcbiAgICBpZiAoIShcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSlcbiAgICAgICAgLy8gbGF0IDQzLjAwMDAwMCBUT0RPOiBkZWZhdWx0ID0gTmV3IFlvcmtcbiAgICAgICAgLy9sb25nIC03NS4wMDAwMDBcbiAgICB7IHJldHVybiBjb25zb2xlLmxvZygnYnJvd3NlciBubyBzdXBwb3J0byBsYSBnZW9sb2NhdGlvbmUnKX1cbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRQb3MoKVxuICAgIHJldHVybiBpbnRvQ29vcmRpbmF0ZXMoY29vcmRzKVxuXG4gICAgZnVuY3Rpb24gZ2V0UG9zKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHN1Y2Nlc3MsIGVycm9yKSA9PiB7IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2VzcywgZXJyb3IpfSlcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50b0Nvb3JkaW5hdGVzKHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxhdCA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZVxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcbiAgICAgICAgICAgIGxhdCA6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgIGxvbmcgOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZGluYXRlc1xuICAgIH1cbn1cblxuY29uc3QgZ2V0V2VhdGhlck9mTXlDaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBhd2FpdCBnZW9sb2NhdGlvbigpXG4gICAgICAgIGNvbnN0IGNpdHkgPSBhd2FpdCBnZXRDaXR5KGNvb3JkaW5hdGVzKVxuICAgICAgICBjb25zdCB3ZWF0aGVyT2JqZWN0ID0gYXdhaXQgZmV0Y2hXZWF0aGVyRGF0YShjaXR5KVxuICAgICAgICByZXR1cm4gd2VhdGhlck9iamVjdFxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG5cbn1cbmZ1bmN0aW9uIGNvbnZlcnQodGVtcGVyYXR1cmUpIHtcbiAgICBsZXQgdGVtcCA9IHRlbXBlcmF0dXJlIC0gMjczXG4gICAgaWYoY29udmVyc2lvbiAlIDIgPT0gMCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0ZW1wICogMTAwKSAvIDEwMFxuICAgIH1cbiAgICByZXR1cm4gY1RvRih0ZW1wKVxuICAgIGZ1bmN0aW9uIGNUb0YoY2Vsc2l1cylcbiAgICB7XG4gICAgICAgIGxldCBjVGVtcCA9IGNlbHNpdXM7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChjVGVtcCAqIDkgLyA1ICsgMzIpICogMTAwKSAvIDEwMDtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGNpdHkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JkFQUElEPTIwZjc2MzJmZmMyYzAyMjY1NGU0MDkzYzY5NDdiNGY0YFxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKHVybClcbiAgICAgICAgY29uc3QgZGF0YVRvSlNPTiA9IGF3YWl0IGRhdGEuanNvbigpXG4gICAgICAgIGlmIChkYXRhVG9KU09OLmNvZCA9PSBcIjQwNFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNpdHkgbm90IGZvdW5kIVwiKVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3ZWF0aGVyT2JqID0gZ2V0RGF0YShkYXRhVG9KU09OKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyT2JqKVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NvbWV0aGluZyB3ZW50IHdyb25nJyArIGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGF0YShkYXRhVG9KU09OKSB7XG4gICAgICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgICAgICdjaXR5JyA6IGRhdGFUb0pTT04ubmFtZSxcbiAgICAgICAgICAgICd0aW1lJyA6IGdldERhdGUoZGF0YVRvSlNPTi50aW1lWm9uZSksXG4gICAgICAgICAgICAnbWFpbicgOiBkYXRhVG9KU09OLndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgICAgICdkZXNjcmlwdGlvbicgOiBkYXRhVG9KU09OLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAndGVtcGVyYXR1cmUnIDogY29udmVydChkYXRhVG9KU09OLm1haW4udGVtcCksXG4gICAgICAgICAgICAnd2luZCcgOiBkYXRhVG9KU09OLndpbmQsXG4gICAgICAgICAgICAnZmVlbHNfbGlrZScgOiBjb252ZXJ0KGRhdGFUb0pTT04ubWFpbi5mZWVsc19saWtlKSxcbiAgICAgICAgICAgICd0ZW1wX21pbic6IGNvbnZlcnQoZGF0YVRvSlNPTi5tYWluLnRlbXBfbWluKSxcbiAgICAgICAgICAgICd0ZW1wX21heCcgOiBjb252ZXJ0KGRhdGFUb0pTT04ubWFpbi50ZW1wX21heCksXG4gICAgICAgICAgICAnaHVtaWRpeSc6IGAke2RhdGFUb0pTT04ubWFpbi5odW1pZGl0eX0lYCxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgIGZ1bmN0aW9uIGdldERhdGUodGltZXpvbmUpIHtcbiAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0b2RheU9mZnNldCA9IHRvZGF5ICsgdGltZXpvbmVcbiAgICAgICAgICAgIHJldHVybmAke3RvZGF5LmdldEhvdXJzKCl9OiR7dG9kYXkuZ2V0TWludXRlcygpfWBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtnZXRXZWF0aGVyT2ZNeUNpdHl9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9