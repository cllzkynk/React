import { ToastContainer } from "react-toastify";
import CustomRoutes from "./router/custom-routes";
import { StoreProvider } from "./store";

const App = () => {
  return (
    <StoreProvider>
      <CustomRoutes/>
      <ToastContainer />
    </StoreProvider>
  );
}

export default App;
