import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css"; 
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Top from "./pages/Navbar";
import About from "./pages/About";
import NoPage from "./pages/NoPage";
import Shop from "./pages/Shop";
import Ship from "./pages/Ship";
import Footer from "./pages/Footer";
import Contact from "./pages/contact";
import DarkMode from "./components/DarkMode";
import TaC from "./pages/TaC";
import Sitemap from "./pages/Sitemap";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Top" element={<Top />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="ship" element={<Ship />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Bottom" element={<Footer />} />
          <Route path="*" element={<NoPage />} />
          <Route path="DarkMode" element={<DarkMode />} />
          <Route path="TaC" element={<TaC />} />
          <Route path="Sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);