import { BrowserRouter } from "react-router-dom"

import CustomRoutes from "./router/CustomRoutes"

function App() {
  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App;