import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mohali");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=48d92e9d1a36759e07dc8b1265a9411b&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);

            setCity(resJson.main);

        }

        fetchApi();
    }, [search])

    let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric", year:"numeric"});

    return (
        < >
            <div className="box">
                <div className="inputData">
                    <input
                        spellCheck="false"
                        placeholder="Enter City Name"
                        type="search"
                        value={search}
                        className="inputFeild"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />

                    {/* <form action="">
                        <input type="search"  placeholder="Enter City Name" />
                        <button  onClick={(event) => { setSearch(event.target.value) }}>search</button>
                    </form> */}
                </div>

                {!city ? (
                    <p className="errorMsg">No Data Found <br /> Please Check Your Spelling  </p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>

                            <div id="date">
                                <h3>{now}</h3>
                            </div>

                            <h1 className="temp">
                                {city.temp}°C
                            </h1>

                            <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                            <h3 className="tempmin_max">Feels Like : {city.feels_like}°C</h3>
                            <h3 className="tempmin_max">Humidity : {city.humidity}%</h3>
                            <h3 className="tempmin_max">Pressure : {city.pressure} mBar</h3>
                            
                        </div>


                    </div>

                )}

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>



            </div>
        </>
    )
}

export default Tempapp;
