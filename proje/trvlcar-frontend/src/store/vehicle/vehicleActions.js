import { types } from "../types";

export const setVehicles = (vehicles) => ({
    type: types.SET_VEHICLES,
    payload: vehicles
});