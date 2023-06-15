import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Contact from "./contact/contact";
import About from "./about/about";
import Home from "./home/Home";
import Provide from "./provide/provide";
import Save from './Save/Savedate.js';
import Wardrobe from './wardrobe/Wardrobes.js';
import Anniversary from './Anniversary/Anniversarys.js';
import Engagement from './engagement/Engagements.js';
import Pdf from './pdf/pdf.js';
import Housewarming from './housewarming/Homewarming';
import Caricature from './caricature/caricature';
import Couple from './couple/Couples';
import Wedding from './wedding/wedding.js';

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Days from "./daysTogo/days.js";
import Dayss from "./daysTogo/Dayss";

{/* <Days */}
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />        
            <Route  path="/about" element={<About />} />
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/whatweprovide" element={<Provide />} />
            <Route  path="/days" element={<Dayss />} />
            <Route  path="/save" element={<Save />} />
            <Route  path="/wardrobe" element={<Wardrobe />} />
            <Route  path="/anniversary" element={<Anniversary />} />
            <Route  path="/engagement" element={<Engagement />} />
            <Route  path="/pdf" element={<Pdf />} />
            <Route  path="/housewaming" element={<Housewarming />} />
            <Route  path="/caricature" element={<Caricature />} />
            <Route  path="/couple" element={<Couple />} />
            <Route  path="/wedding" element={<Wedding />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </>
  );
}

export default App;
