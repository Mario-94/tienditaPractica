import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import "./styles/footer.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Productos from "./views/Productos";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
