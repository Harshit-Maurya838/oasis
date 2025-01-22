import Navbar from './components/ui/navbar.ui.component'
import './App.css'
import HeroSection from './components/ui/hero.ui.component'
import oasisLogo from '/Oasis.svg'
import Footer from './components/ui/footer.ui.component'
import Categories from './components/ui/categories.ui.component'
import FaQ from './components/ui/faq.ui.component'
import DropDown from './components/utils/dropdown.utils.component'
import Product from './components/utils/productCard.utils.component'
import StarRating from './components/utils/rating.utils.component'

function App() {


  return (
    <>
        <Navbar />
        <section id="main-body">
            <HeroSection />
            <Categories />
            <FaQ />
            <DropDown items={[
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
            ]} />
            {/* <Product /> */}
            <StarRating rating={3.5} />
        </section>
        <Footer />
    </>
  )
}

export default App
