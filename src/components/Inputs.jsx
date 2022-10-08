import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Inputs({setQuery,units,setUnits}){
const [city, setCity] = useState("");
const handleSearchClick =()=>{
    if(city !=='') setQuery({q:city})
}
const handleUnitsChange =(e)=>{
    const selectedUnit = e.currentTarget.name;
    if(units !==selectedUnit) setUnits(selectedUnit);
}
    return (
        <div className="flex flex-row w-3/4 justify-center my-6">
            <div className="flex flex-row items-center justify-around space-x-4">
                <input 
                value={city}
                onChange={(e)=>setCity(e.currentTarget.value)}
                type="text" 
                placeholder="Search for city....." 
                className="text-xl font-light p-2 w-full focus: outline-none"
                />
                <UilSearch size={25} className="cursor-pointer text-white transition ease-out hover:scale-125" onClick={handleSearchClick}/>
                <UilLocationPoint size={25} className="cursor-pointer text-white transition ease-out hover:scale-125"/>
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center ">
                <button name="metric" className="text-white text-xl " onClick={handleUnitsChange}>C</button>
                <p className="text-white text-xl mx-1">|</p>
                <button name="imperial" className="text-white text-xl" onClick={handleUnitsChange}>F</button>
            </div>
        </div>
    );
}
export default Inputs;