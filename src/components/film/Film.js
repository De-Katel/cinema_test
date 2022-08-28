import React from "react";

import { useSelector } from "react-redux/es/exports";

import DateList from "../date-list/Date-list";

import poster from './poster.jpg';

import './Film.css';


const Film = () => {
    
    const film = useSelector((state)=>state.film);

    return (
        <div className="film">
            <div className="session" ><img className='poster' src={poster} alt='poster' />
                <DateList/>
            </div>
        </div>
    )
}

export default Film