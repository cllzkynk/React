import { createContext, useContext, useReducer } from "react";
import { listeReducer } from "./liste/listeReducer";
import { listeInitialState } from "./liste/listeInitialState";



const ListeContext = createContext();
export const useStore = () => useContext(ListeContext);
export const StoreProvider = ({ children }) => {
  const [listeState, dispatchListe] = useReducer(
    listeReducer,
    listeInitialState
  );
  return (
    <ListeContext.Provider value={{ listeState, dispatchListe }}>
      {children}
    </ListeContext.Provider>
  );
};