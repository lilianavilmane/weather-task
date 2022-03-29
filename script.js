async function mainFunction (){

    navigator.geolocation.getCurrentPosition(showWeather);
    
    
}

async function showWeather (position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=56.9176373&longitude=24.007533541&current_weather=true"

    const response = await fetch (weatherURL);
    const data = await response.json();
    console.log(data);
    const element = document.getElementById("temp")
    element.innerHTML = data.current_weather.temperature + "C";
 


const type = data.current_weather.weathercode;
switch (type){
    case 0:
        document.getElementById("sun").style= "";
        break;
        case 1,2,3:
          document.getElementById("cloudsun").style="";
          break;
          case 45,48:
              document.getElementById("fog").style = "";
              break;
        case 51,53,55,56,57:
            document.getElementById("dizzle").style = "";
            break;
        case 61,63,65,66,67:
         document.getElementById("rain").style = "";
        break;
        case 71,73,75,77,85,86:
            document.getElementById("snow").style = "";
            break;
            
}

} 

                







                
             

