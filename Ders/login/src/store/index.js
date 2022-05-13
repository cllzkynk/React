import { createContext, useContext, useReducer } from "react";
import { userReducer } from "./user/userReducer";
import { userInitialState } from "./user/userInitialState";

/* Merkezi state oluşturuluyor */
const StoreContext = createContext();
StoreContext.displayName="StoreContext";

/* Merkezi state in -useContext(StoreContext)- diğer componentlerde import unu kolaylaştırmak için  useStore a eşitledik*/
export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
    const [userState, dispatchUser] = useReducer(userReducer, userInitialState);

  return (
    <StoreContext.Provider value={{ userState, dispatchUser }}>
      {children}
    </StoreContext.Provider>
  );
};
