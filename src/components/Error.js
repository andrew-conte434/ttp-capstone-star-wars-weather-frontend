import "../Error.css"
import Image from "../death-star.png"

export default function CityError() {
    return (

        <div className="error-page">
            <div>
            <h1 className="error-title">Oops. Couldn't find data on that city.</h1>
            {/* <img src={Image} className="error-img" /> */}
            </div> 
        </div>


    )
}