import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
// import uuid from "uuid";
import { useNavigate } from "react-router-dom";
import "../styles/List.css"

export default function List() {
    let navigate = useNavigate()
    const unique_id = uuid();

    const [item, setItem] = useState("");
    // const [items, setItems] = useState([]);

    const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || [])

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
        console.log(items)
    }, [items])

    const add = (e) => {
        e.preventDefault();
        if (!item) {
            return;
        }
        setItems((items) => [
            ...items,
            {
                id: unique_id,
                item
            }
        ]);

        setItem('')

        console.log("item:", item)
        console.log("id", item.id)

    };

    const remove = (index) => {
        setItems((items) => items.filter((_, i) => i !== index));
    };


    //the original function i was using
    // const goToCity = (id) => {
    //     const x = document.getElementById(`displayedCity-${id}`).innerText
    //     navigate(`/${x}`);
    // }

    const goToCity = (id) => {
        const x = document.getElementById(`displayedCity-${id}`).textContent
        console.log(x);
        navigate(`/${x}`);
    }

    const goToHome = () => {
        navigate('/')
    }

    return (
        <div className="List">

            <div>
                <img id="background-img" src='https://wallpaper.dog/large/10878177.jpg' />
            </div>

            <h1 className="list-title">My Cities</h1>

            <div>
                <button className="button" id='home-btn' onClick={goToHome}>HOME</button>
            </div>

            <form onSubmit={add} className='list-form'>
                <fieldset>
                    {/* <label className="list-label"></label> */}
                    <input placeholder="ENTER CITY NAME" id='city' value={item} onChange={(e) => setItem(e.target.value)} />
                </fieldset>
                <button className="button" id='add-btn' type="submit">add</button>
            </form>

            {items.map((item, index) => {
                return (
                    <div className='city-div' key={item.id}>

                        {/* the original code i was using */}
                        {/* <p id='displayedCity'>{item.item}</p>
                            <button className="button" id='navigate' onClick={goToCity}>navigate</button> */}

                        <p id={`displayedCity-${item.id}`} key={item.id}>{item.item}</p>

                        <div className='city-buttons'>
                            <button className="button" id='navigate' onClick={() => goToCity(item.id)}>navigate</button>
                            <button className="button" id='remove' onClick={() => remove(index)}>remove</button>
                        </div>
                    </div>
                );
            })}
        </div >
    );
}