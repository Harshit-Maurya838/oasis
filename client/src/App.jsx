import Navbar from "./components/ui/navbar.ui.component";
import "./App.css";
import './styles/utils/utils.styles.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/ui/hero.ui.component";
import oasisLogo from "/Oasis.svg";
import Footer from "./components/ui/footer.ui.component";
import Categories from "./components/ui/categories.ui.component";
import FaQ from "./components/ui/faq.ui.component";
import DropDown from "./components/utils/dropdown.utils.component";
import Product from "./components/utils/productCard.utils.component";
import StarRating from "./components/utils/rating.utils.component";

import Panel from "./components/ui/panel.ui.component";
import ProductDetail from "./components/ui/productDetail.ui.component";

function App() {
  let data = {
    title: "Faux Leather Sofa Couch new premium",
    category: "Chair",
    tags: "",
    desc: "AMAZING CHAIR",
    basePrice: "500",
    rating: "4.2",
    variants: [
      {
        var_name: "name of the variant",
        var_url: "endpoints of the url",
        var_gallery: ["array of image gallery"],
        var_color: "red",
        discount: "40%",
      },
      {
        var_name: "name of the variant",
        var_url: "endpoints of the url",
        var_gallery: ["array of image gallery"],
        var_color: "blue",
        discount: "40%",
      },
    ],
  };

  return (
    <>
      <Router>
        <Navbar />
        <section id="main-body">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/faq" element={<FaQ />} />
            <Route path="/panel" element={<Panel />} />
            <Route path="/product" element={<ProductDetail data={data} />} />
          </Routes> 
        </section>
        <Footer />
      </Router>
    </>
  );
}

export default App;
