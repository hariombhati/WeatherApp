const form = document.querySelector("form")
const input = document.querySelector("input")
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")

const img = document.querySelector("img")
const region = document.querySelector(".region")
const country = document.querySelector(".country")
const humidity = document.querySelector(".humidity")

form.addEventListener("submit", getData)

async function getData(e) {
    e.preventDefault()
    let inputCity = input.value
    let apiKey = "9dba512d280f4ac39ed80615221606"
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputCity}&aqi=yes`)
    const data = await res.json()
    console.log(data)
    let cityName = data.location.name
    let celcius = data.current.temp_c
    let icon = data.current.condition.icon
    h1.innerText = cityName
    h2.innerText = celcius
    region.innerHTML = "Country :- " + data.location.region
    country.innerHTML = "Region :- " + data.location.country
    humidity.innerHTML = "Humidity :- " + data.current
        .humidity
    img.setAttribute("src", `https:${icon}`)
    form.reset()
}