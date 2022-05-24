import { createContext, useContext, useReducer } from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";
import { vehicleInitialState } from "./vehicle/vehicleInitialState";
import { vehicleReducer } from "./vehicle/vehicleReducer";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  const [vehicleState, dispatchVehicle] = useReducer(vehicleReducer, vehicleInitialState);

  const storeObject = { userState, dispatchUser, vehicleState, dispatchVehicle };

  return <Store.Provider value={storeObject}>{children}</Store.Provider>;
};
