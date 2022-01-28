export default function selectPlanet(temp, cloud, description){
    console.log(temp)
    if(temp < 273){
        return 2
    } else if(temp >= 273 && temp < 295){
        return temperatePlanet(cloud, description)
    }
    else if (temp >= 295 && temp < 320){
        return hotPlanet(cloud, description)
    } else {
        return 8
    }
}

function temperatePlanet(cloud, description){
    if(description.includes("rain")) {
        return 4
    }

    if(cloud <= 60){
        return 3
    } 
    
    if(description.includes("haze") || description.includes("mist") || description.includes("fog")){
        return 7
    } else {
        return 6
    }
}

function hotPlanet(cloud, description){
    if(cloud < 60) {
        return 1
    }
    if(description.includes("rain")){
        return 5
    } else {
        return 10
    }
}
