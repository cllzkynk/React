import { createContext, useContext, useReducer } from "react";
import { bookInitialState } from "./book/bookInitialState";
import { bookReducer } from "./book/bookReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const BooksContext = createContext();

export const useStore = () => useContext(BooksContext);

export const StoreProvider = ({ children }) => {
  const [bookState, dispatchBook] = useReducer(bookReducer, bookInitialState);

  return (
    <BooksContext.Provider value={{ bookState, dispatchBook }}>
      {children}
    </BooksContext.Provider>
  );
};
