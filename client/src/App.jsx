import Navbar from "./components/ui/navbar.ui.component";
import "./App.css";
import './styles/utils/utils.styles.css'
import HeroSection from "./components/ui/hero.ui.component";
import Footer from "./components/ui/footer.ui.component";
import Categories from "./components/ui/categories.ui.component";
import FaQ from "./components/ui/faq.ui.component";
import DropDown from "./components/utils/dropdown.utils.component";
import SidePanel from "./components/ui/sidepanel.ui.component";
import LoginPage from "./components/ui/loginPage.ui.component";

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
        <SidePanel panelHeading={"Login"}>
          <LoginPage />
        </SidePanel>
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
        <Panel>
          <div className="header " >
            <p className="text-26-semibold">Top Items</p>
            <DropDown
              items={[
                {
                  itemname: "Higher to lower",
                  itemcallback: () => {
                    return null;
                  },
                },
                {
                  itemname: "Lower to higher",
                  itemcallback: () => {
                    return null;
                  },
                },
                {
                  itemname: "Recently added",
                  itemcallback: () => {
                    return null;
                  },
                },
              ]}
            />
          </div>
        </Panel>
        {/* <StarRating rating={3.5} /> */}
      </section>
      <Footer />
    </>
  );
}

export default App;
