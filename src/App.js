import './style/App.css';
import './style/index.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyServices from './components/MyServices';
import Featured from './components/Featured';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <AboutMe />
      <MyServices />
      <Featured />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
