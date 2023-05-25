
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import Contact from './contact/contact';
import About from './about/about';
import Home from './home/home';
import Provide from './provide/provide';

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
    
     <BrowserRouter>
    <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatweprovide" element={<Provide />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
