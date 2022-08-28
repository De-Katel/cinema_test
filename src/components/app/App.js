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
          active: false,
          session: {
            '10:00': {
              busy: 60,
              free: 0
            }, '12:00': {
              busy: 60,
              free: 0
            }, '14:00': {
              busy: 60,
              free: 0
            }, '16:00': {
              busy: 60,
              free: 0
            }, '18:00': {
              busy: 60,
              free: 0
            }, '20:00': {
              busy: 60,
              free: 0
            }
          }
        }
      })))
    } else {
      console.log('Djnfr')
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
