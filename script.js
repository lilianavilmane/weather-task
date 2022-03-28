async function mainFunction (){

    navigator.geolocation.getCurrentPosition(showWeather);

}

async function showWeather (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=56.9176373&longitude=24.007533541&current_weather=true"

    const response = await fetch (weatherURL);
    const data = await response.json();
    const element = document.getElementById("temp")
    element.innerHTML = data.current_weather.temperature + "C";
    
}

    


                







                
             

