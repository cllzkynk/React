import { types } from "../types";

export const ekle = (book) => ({
  type: types.EKLE,
  payload: book,
});

export const arttir = (id) => ({
  type: types.ARTTİR,
  payload: id,
});
export const azalt = (id) => ({
  type: types.AZALT,
  payload: id,
});
export const cikart = (id) => ({
  type: types.CİKART,
  payload: id,
});
