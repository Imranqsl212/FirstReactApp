import "./styles/main.css";
import Header from "./components/UI/header/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Notfound from "./pages/notFound/notfound.jsx";
import Basket from "./pages/basket/basket.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
