async function mainFunction() {

    navigator.geolocation.getCurrentPosition(showWeather);

    weekDay();
}

async function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=56.9176373&longitude=24.007533541&current_weather=true"

    const response = await fetch(weatherURL);
    const data = await response.json();
    console.log(data);
    const element = document.getElementById("temp")
    element.innerHTML = data.current_weather.temperature + " C";
    

    



    const type = data.current_weather.weathercode;
    switch (type) {
        case 0:
            document.getElementById("sun").style = "";
            break;
        case 1:
        case 2:
        case 3:
            document.getElementById("cloudsun").style = "";
            break;
        case 45:
        case 48:
            document.getElementById("fog").style = "";
            break;
        case 5:
        case 53:
        case 55:
        case 56:
        case 57:
            document.getElementById("dizzle").style = "";
            break;
        case 61:
        case 63: 
        case 65:
        case 66:
        case 67:
            document.getElementById("rain").style = "";
            break;
        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
        case 80:
            document.getElementById("snow").style = "";
            break;

    }

}
function weekDay(){
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",  "November", "December"];
    const myDate = new Date();
    const fullDate = "Today " + myDate.getDate() + " " + month[myDate.getMonth()]+ " " + myDate.getFullYear() + " " + days[myDate.getDay()];
    document.getElementById(fullDate);
    const day = document.getElementById("day")
    day.innerHTML = (fullDate);
    
}