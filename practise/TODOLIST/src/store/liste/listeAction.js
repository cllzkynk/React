import { types } from "../types";
export const listeyeEkle = (text) => {
  return {
    type: types.EKLE,
    payload: text,
  };
};
export const isaretle = (id) => {
  return {
    type: types.ISARETLE,
    payload: id,
  };
};
export const temizle = () => {
  return {
    type: types.TEMIZLE,
  };
};
