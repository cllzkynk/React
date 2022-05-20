import { createContext, useContext, useReducer } from "react";
import { userInitialState } from "./user/userInitialState";
import { userReducer } from "./user/userReducer";

const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [userState, dispatchUser] = useReducer(userReducer, userInitialState);
  // vehicle tanımlaması

  const storeObject = { userState, dispatchUser };

  return <Store.Provider value={storeObject}>{children}</Store.Provider>;
};
