import {getWeatherOfMyCity, getWeatherOfCity} from "./modules/apiCalls";
import './style.css';
const sectionsArray = [
    'city', 'description', 'weatherIcon', 'searchbar', 'details'
]
createContainer()
// window.onload(populateWebsite())


await populateWebsite()
await createSearchBar()
async function createSearchBar() {
        const form = document.createElement('form')

        const target = document.querySelector(`#searchbar`)
        const child = document.createElement('input')
        child.id = 'searchBar'
        form.appendChild(child)
        target.appendChild(form)
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const input = e.target.children[0]
            loadNewWebSite(input.value)
            input.value = ''}
        )
    }
loadWebsite(await getWeatherOfMyCity());
function loadWebsite(cityObj){
    for (const [key, value] of Object.entries(cityObj)) {
        if(typeof value === 'object') {
            loadWebsite(value)
        }
        else{
            const target = document.getElementById(key)
            const child = document.createElement('div')
            child.innerText = value
            target.appendChild(child)
        }

    }
    //if prop = object:
    //document.append
}

async function scrapeWebsite() {
    const sectionsNoSearchbar = sectionsArray.filter(section => section !== 'searchbar')
    sectionsNoSearchbar.forEach(section => {
        const elem = document.getElementById(section)
        elem.innerHTML= ''
    })
    await populateWebsite()
}
await getWeatherOfCity(input.value)
function createContainer() {
    const doc = document.querySelector('body')
    const container = document.createElement('div')
    container.id = 'container'
    doc.appendChild(container)


    sectionsArray.forEach((section) => {
        const elem = document.createElement('div')
        elem.id = section
        container.appendChild(elem)
    })
}

async function populateWebsite() {

    const ElementArray = [
        {id: 'cityName', name: '', target: 'city'},
        {id: 'time', name: '', target: 'city'},
        {id: 'main', name:'', target: 'description'},
        {id: 'description', name:'', target: 'description'},
        {id: 'temperature', name:'Temperature: ', target: 'weatherIcon'},
        {id: 'speed', name:'Wind Speed:', target: 'details'},
        {id: 'deg', name:'Wind Degrees:', target: 'details'},
        {id: 'feels_like', name:'Feels Like:', target: 'weatherIcon'},
        {id: 'temp_min', name:'Min Temperature:', target: 'details'},
        {id: 'temp_max', name: 'Max Temperature:', target: 'details'},
        {id: 'speed', name: 'Wind Speed:', target: 'details'}
    ]
    for (const element of ElementArray) {
        const target = document.querySelector(`#${element.target}`)
        const child = document.createElement('div')
        child.id = element.id
        const description = document.createElement('div')
        description.innerText = element.name;
        child.appendChild(description)
        target.appendChild(child)
    }

}

async function loadNewWebSite(value) {
    await scrapeWebsite()
    loadWebsite(await getWeatherOfCity(value))
}
