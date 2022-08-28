export const ACTIONS = {
   NEW_DAY: 'NEW_DAY',
   NEW_FILM_DATA: 'NEW_FILM_DATA',
   NEW_DATE_LIST: 'NEW_DATE_LIST',
   NEW_ACTIVE_DATE: 'NEW_ACTIVE_DATE'
}



export const newDay = (date) => {
   return {
      type: ACTIONS.NEW_DAY,
      date
   }
}

export const newFilmData = (film) => {
   return {
      type: ACTIONS.NEW_FILM_DATA,
      film
   }
}

export const newDateList = (actualDateArr) => {
   return {
      type: ACTIONS.NEW_DATE_LIST,
      actualDateArr
   }
}

export const newActiveDate = (film) => {
   return {
      type: ACTIONS.NEW_ACTIVE_DATE,
      film
   }
}