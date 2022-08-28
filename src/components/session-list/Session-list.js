import React from "react";

import { useSelector } from "react-redux/es/exports";
import './Session-list.css'

const SessionList = () => {

    const film = useSelector((state) => state.film);

    const activeDate = film.find(item => item.active == true)

    const elements = film.length ? activeDate.session.map((item) => {
        return (
            <li>
                <button className={`date-button ${item.active ? 'activ' : null}`}>
                    {item.time}
                </button>
            </li>
        )
    }) : null

    return (
        <div className="session-list">
            <p>{` сеансы ${activeDate.date}`}</p>
            <ul className='date-list'>
                {elements}
            </ul>
        </div>

    )
}

export default SessionList