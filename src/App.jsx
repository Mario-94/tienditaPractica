import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
// import Productos from "./views/Productos";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import CartShooping from "./cart/CartShooping";
import HotelDetails from "./pruebas/HotelDetails";
import HotelList from "./pruebas/HotelList";
import { Toaster } from "react-hot-toast";
import Prueba from "./views/Prueba";
import Products from "./products/Products";
const client = new QueryClient();

function App() {
  return (
    <>
      <Toaster position="button-center" reverseOrder={false} />
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <div className="header">
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/carritoCompras" element={<CartShooping />} />
              <Route path="/pruebas" element={<HotelList />} />
              <Route path="/prueba" element={<Prueba />} />

              <Route path="/usuario/:id" element={<HotelDetails />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
