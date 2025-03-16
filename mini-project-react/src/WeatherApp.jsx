import { useState } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './infoBox'
export default function WeatherApp(){
    let [WeatherInfo,setWeatherInfo]= useState({
        city:"Delhi",
        feelslike:24.85,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div>
            <h2 style={{textAlign:'center'}}>WeatherApp</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>

    );}
