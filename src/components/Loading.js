import React, { useEffect, useState } from "react";
import '../styles/Loading.css'

const imageUrls = require('../modules/imageUrlArray')

export default function Loading() {
    const [currentImg, setCurrentImg] = useState(Math.floor(Math.random()*imageUrls.length))

    useEffect(() => {
        const interval = setInterval(() => {
            let index = Math.floor(Math.random()*imageUrls.length)
            if(index === currentImg){
                index === imageUrls.length ? index = 0 : index += 1
            }
            setCurrentImg(index)
        }, 700);
        return () => clearInterval(interval)
    }, [])

    console.log(currentImg)
    return (
        <div className="loading-screen">
            <div>
                <img className="loading-image" src={imageUrls[currentImg]} alt="background image"/>
            </div>
            <div className="loading-gif">
                <img src={require('../images/bb8-gif.gif')} alt="loading..." />
            </div>
        </div>
    )
}
