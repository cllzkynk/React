import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
