import Liste from "./components/liste";
import { StoreProvider } from "./store/index";

function App() {



  return(
    <StoreProvider>

      <Liste/>
      
    </StoreProvider>
  )



}

export default App;
