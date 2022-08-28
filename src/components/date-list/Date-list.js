import React from "react";

import { useDispatch, useSelector } from "react-redux/es/exports";


import { newActiveDate } from "../../storage/actions";

import './Date-list.css';

const DateList = () => {

    const film = useSelector((state) => state.film);

    const dispatch = useDispatch();

    const buttonDateList = film.slice(7).map((item) => {
        return (
            <li key={item.date}>
                <button
                    className={`date-button ${item.active ? 'activ' : null}`}
                    onClick={() => dispatch(newActiveDate(((() => film.map((i) => {
                        return {
                            date: i.date,
                            active: i.date === item.date ? true : false,
                            session: i.session
                        }
                    })
                    )()
                    )))}>
                    {item.date === new Date().toLocaleDateString('ru-RU') ? 'Сегодня' : item.date}
                </button>
            </li >
        )
    })

    return (
        <div className="description">
            <h2>В бой идут одни старики</h2>
            <p>выберите дату</p>
            <ul className='date-list'>
                {buttonDateList}
            </ul>
        </div>
    )
}

export default DateList