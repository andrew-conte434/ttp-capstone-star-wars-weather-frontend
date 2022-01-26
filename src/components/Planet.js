import React, { useEffect, useState } from 'react'

export default function(props){
    const [planet, setPlanet] = useState({
        name : "",
        description : "",
        imageUrl : "",
    })
    const [id, setId] = useState(1)

    useEffect(async() => {
            getPlanetId()
            console.log(id)
            await fetchPlanet()
        }, [])

    const fetchPlanet = async() => {
        try {
            const res = await fetch(`https://star-wars-weather-database.herokuapp.com/api/planets/${id}`)
            const obj = await res.json()
            console.log(obj)
            setPlanet(obj)
        }catch(error){
            throw error
        }
    }

    function getPlanetId(){
        const temp = props.weatherData.main.temp
        console.log(temp)
        if(temp > 370) { //REALLY HOT!!!
            setId(1)
        } else if(temp <= 370 && temp > 300){//TEMPERATE
            setId(3)
        } else {//COLD!
            setId(2)
        }
        console.log(id)
    } 
    return (
        <div>
            
            <div className='planet-image'>
                <img src={planet.imageUrl} alt="planet"/>
            </div>
            <h1>It's like {planet.name} out there</h1>
        </div>
    )
}  