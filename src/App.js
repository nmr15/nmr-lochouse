import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Ourwork from './Components/Ourwork';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Carousel, { CarouselItem } from './Components/Carousel';
import BootstrapCarousel from './Components/BootstrapCarousel';

function App() {
  return (
    <div className="App">
      <nav>
        <Navbar />
      </nav>  
      <main>
        <About />
        <Service />
        {/* <Ourwork /> */}
        <Carousel />
        {/* <BootstrapCarousel /> */}
        <Contact />
        <Team />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
