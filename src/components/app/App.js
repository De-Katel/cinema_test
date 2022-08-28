import React from "react";
import { useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux/es/exports";

import { newDay, newFilmData, newDateList, newActiveDate } from "../../storage/actions";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

function App() {

  const dispatch = useDispatch();

  const film = useSelector((state) => state.film);
  const today = useSelector((state) => state.today);
  const actualDateArr = useSelector((state) => state.actualDateArr);

  const createData = useCallback(() => {

    const dateArr = [];

    const getActulDateArr = () => {
      let day = -604800000;
      for (let i = 0; i < 14; i++) {
        dateArr.push(new Date(+new Date + day).toLocaleDateString('ru-RU'));
        day += 86400000;
      };

    }

    const getActualFilm = () => {

      let actualDateIndex = null;

      film.forEach((element, index) => {
        if (element.date == new Date(+new Date() - 604800000).toLocaleDateString('ru-RU')) {
          actualDateIndex = index
        }
      });

      const prevStorageDayFilmSession = film.slice(actualDateIndex);
      const nextDayFilmSession = [];

      let day = 604800000
      const getNextDayFilmSession = () => {
        for (let i = 0; i < 14 - prevStorageDayFilmSession.length; i++) {
          nextDayFilmSession.push({
            date: new Date(+new Date + day).toLocaleDateString('ru-RU'),
            active: false,
            session: [
              {
                time: '10:00',
                active: false,
                busy: 60,
                free: 0
              },
              {
                time: '12:00',
                active: false,
                busy: 60,
                free: 0
              },
              {
                time: '14:00',
                active: false,
                busy: 60,
                free: 0
              },
              {
                time: '16:00',
                active: false,
                busy: 60,
                free: 0
              },
              {
                time: '18:00',
                active: false,
                busy: 60,
                free: 0
              },
              {
                time: '20:00',
                active: false,
                busy: 60,
                free: 0
              },
            ]
          })
          day += 86400000;
          console.log(day)
        }
      };

      getNextDayFilmSession();
      return [...prevStorageDayFilmSession, ...nextDayFilmSession]
    }

    getActulDateArr();


    if (today !== new Date().toLocaleDateString('ru-RU')) {
      dispatch(newDay(new Date().toLocaleDateString('ru-RU')))
    };

    if (!actualDateArr.length || today !== new Date().toLocaleDateString('ru-RU')) {
      dispatch(newDateList(dateArr))
    };

    if (!film.length) {
      dispatch(newFilmData(dateArr.map((item) => {
        return {
          date: item,
          active: item == new Date().toLocaleDateString('ru-RU') ? true : false,
          session: [
            {
              time: '10:00',
              active: false,
              busy: 60,
              free: 0
            },
            {
              time: '12:00',
              active: false,
              busy: 59,
              free: 0
            },
            {
              time: '14:00',
              active: false,
              busy: 58,
              free: 0
            },
            {
              time: '16:00',
              active: false,
              busy: 57,
              free: 0
            },
            {
              time: '18:00',
              active: false,
              busy: 56,
              free: 0
            },
            {
              time: '20:00',
              active: false,
              busy: 55,
              free: 0
            },
          ]
        }
      })))
    } else if (film[8] !== today) {

      dispatch(newActiveDate(getActualFilm()))
    }
  }, []);

  useEffect(() => createData, []);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
