import Navbar from "./components/ui/navbar.ui.component";
import "./App.css";
import HeroSection from "./components/ui/hero.ui.component";
import oasisLogo from "/Oasis.svg";
import Footer from "./components/ui/footer.ui.component";
import Categories from "./components/ui/categories.ui.component";
import FaQ from "./components/ui/faq.ui.component";
import DropDown from "./components/utils/dropdown.utils.component";
import Product from "./components/utils/productCard.utils.component";
import StarRating from "./components/utils/rating.utils.component";

import Panel from "./components/ui/panel.ui.component";

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
      <Navbar />
      <section id="main-body">
        <HeroSection />
        <Categories />
        <FaQ />
        {/* <DropDown items={[
              {
                'itemname':'Higher to lower',
                'itemcallback':()=>{return(null)},
              },
              {
                'itemname':'Lower to higher',
                'itemcallback':()=>{return(null)},
              },
              {
                'itemname':'Recently added',
                'itemcallback':()=>{return(null)},
              }
            ]} /> */}
        {/* <Product
          imgSrc={"./img/samples/sample-image.png"}
          productName={data.title}
          price={data.basePrice}
          variants={data.variants}
          rating={data.rating}
        /> */}

          <Panel />

        {/* <StarRating rating={3.5} /> */}
      </section>
      <Footer />
    </>
  );
}

export default App;
