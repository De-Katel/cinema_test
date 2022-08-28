import session from "redux-persist/lib/storage/session";
import { ACTIONS } from "./actions";

const initialState = {
   film: [],
   actualDateArr: [],
   today: null
}

const usersRreducer = (state = initialState, action) => {
   switch (action.type) {

      case ACTIONS.NEW_DAY:
         return {
            ...state,
            today: action.date
         }

      case ACTIONS.NEW_FILM_DATA:
         return {
            ...state,
            film: action.film
         }

      case ACTIONS.NEW_DATE_LIST:
         return {
            ...state,
            actualDateArr: action.actualDateArr
         }

      case ACTIONS.NEW_ACTIVE_DATE:
         return {
            ...state,
            film: action.film
         }
      default: return state;
   }
}
export default usersRreducer;

