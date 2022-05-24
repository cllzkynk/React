import { types } from "../types";
import { vehicleInitialState } from "./vehicleInitialState";

export const vehicleReducer = (state = vehicleInitialState, action) => {
    if(action.type === types.SET_VEHICLES){
        return {
            ...state,
            vehicles: action.payload
        }
    }

}