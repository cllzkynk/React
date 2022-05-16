import { types } from "../types";
import { listeInitialState } from "./listeInitialState";





export const listeReducer = (state = listeInitialState, action) => {

    const maxIdDizi=state.liste.map(object =>(
        object.id
    ));

    const maxId=Math.max.apply(null, maxIdDizi);
  if (action.type === types.EKLE) {
    console.log(state.liste);
    return {
      ...state,
      liste: [
        ...state.liste,
        {
          id: maxId+1,
          baslik: action.payload,
          tamamlandi: false,
        },
      ],
    };
    
  }

  if (action.type === types.ISARETLE) {
    return {
      ...state,
      liste: state.liste.map((item) =>
        item.id === action.payload
          ? { ...item, tamamlandi: !item.tamamlandi }
          : item
      ),
    };
  }
  if (action.type === types.TEMIZLE) {
    return {
      ...state,
      liste: state.liste.filter((item) => item.tamamlandi === false),
    };
  }
};
