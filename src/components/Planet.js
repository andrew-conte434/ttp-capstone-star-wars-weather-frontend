import React, { useEffect, useState } from 'react'

export default function(props){
    const [planet, setPlanet] = useState({
        name : "",
        description : "",
        imageUrl : "",
    })

    useEffect({
            fetchPlanet()
        }, [])

    const fetchPlanet = () => {
        try {
            const res = fetch("https://star-wars-weather-database.herokuapp.com/api/planets/3")
            const obj = res.json()
            setPlanet(obj)
        }catch(error){
            throw error
        }
    }
    return (
        planet && <img src={planet.imageUrl}/>
    )
}  