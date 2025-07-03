
import './App.css';
import AboutSection from './components/AboutSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import NavbarComponent from './components/Navbar';
import ScrollTopButton from './components/ScrollTopButton';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Home />
      <AboutSection />
      <Service />
      <ContactUs />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export default App;
