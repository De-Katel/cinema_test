import React from "react";
import { useState } from "react";

import { useSelector } from "react-redux/es/exports";

import './Session-list.css'

const SessionList = () => {

    const [timesShowSession, setTimesShowSession] = useState('');

    const film = useSelector((state) => state.film);

    const activeDate = film.find(item => item.active == true);

    const freeShiwSession = timesShowSession ? activeDate.session.find((item) => item.time == timesShowSession).busy : null;

    const elements = film.length ? activeDate.session.map((item) => {
        return (
            <li key={item.time}>
                <button
                    className={`date-button ${item.active ? 'activ' : null}`}
                    onClick={() => {
                        setTimesShowSession(item.time)
                    }}>
                    {item.time}
                </button>
            </li>
        )
    }) : null



    return (
        <>
            {film.length && <div className="session-list">
                <p>{` сеансы ${activeDate.date}`}</p>
                <ul className='date-list'>
                    {elements}
                </ul>
                {timesShowSession && <div className="buy-ticket">
                    <p>{`свободных мест ${freeShiwSession}`}</p>
                    <button className="buy">купить билет</button>
                </div>}
            </div>}
        </>
    )
}

export default SessionList