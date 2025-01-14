import Navbar from './components/ui/navbar.ui.component'
import './App.css'
import HeroSection from './components/ui/hero.ui.component'
import oasisLogo from '/Oasis.svg'
import Footer from './components/ui/footer.ui.component'

function App() {

  return (
    <>
        <Navbar />
        <section id="main-body">
            <HeroSection />
        </section>
        <Footer />
    </>
  )
}

export default App
