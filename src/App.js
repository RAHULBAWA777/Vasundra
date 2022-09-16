//importing components

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";


//importing images

import Navbar from "./components/NewHeader/Navbar";
import AboutUs from "./components/AboutUs/AboutUs";
import FrontPageContent from "./components/frontPage/FrontPageContent";
import LorvenParadise from "./components/completedProjects/Hyderabad/LorvenParadise";
import LorvenCity from "./components/completedProjects/Hyderabad/LorvenCity";
import LorvenGoldLeaf from "./components/completedProjects/Hyderabad/LorvenGoldLeaf";
import TempleView from "./components/currentProjects/TempleView";

import Contact from "./components/contact/Contact";
import CompletedProjects from "./components/completedProjects/CompletedProjects";
import Project from "./components/currentProjects/Project";

import LorvenFortuneHome from "./components/completedProjects/Visakhapatnam/LorvenFortuneHome";
import LorvenFortuneCastle from "./components/currentProjects/visakhaptnam/LorvenFortuneCastle";
import LorvenFortuneClub from "./components/completedProjects/Visakhapatnam/LorvenFortuneClub";
// ongoing
import JubileeHills from "./components/currentProjects/Nalgonda/JubileeHills";
import LorvenBrundhavan from "./components/currentProjects/kalwakurthy/LorvenBrundhavan";
import LorvenMillerCity from "./components/currentProjects/miryalaguda/LorvenMillerCity";


function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FrontPageContent/>} />
            <Route exact path="/about" element={<AboutUs/>} />

          
            <Route exact path="/TirupatiTempleTown" element={<TempleView/>} />
            <Route exact path="/contact" element={<Contact/>} />
            
            <Route exact path="/comProjects" element={<CompletedProjects/>} />
            {/* <Route exact path="/project" element={<Project/>} /> */}

{/* ##################################################################################################### */}

            {/* onGOING proJECTS  HYDERABAD*/}
            <Route exact path="/LorvenParadise" element={<LorvenParadise/>}/>
            <Route exact path="/LorvenCity" element={<LorvenCity/>}/>
            <Route exact path="/LorvenGoldLeaf" element={<LorvenGoldLeaf/>}/>
            {/* onGOING proJECTS  VISAKHPATNAM*/}
            <Route exact path="/LorvenFortuneClub" element={<LorvenFortuneClub/>}/>
            <Route exact path="/LorvenFortuneHome" element={<LorvenFortuneHome/>}/>
            <Route exact path="/LorvenFortuneCastle" element={<LorvenFortuneCastle/>}/>
            {/* onGOING proJECTS  NALGONDA  */}
            <Route exact path="/JubileeHills" element={<JubileeHills/>}/>
            <Route exact path="/JubileeHills" element={<LorvenBrundhavan/>}/>
            <Route exact path="/JubileeHills" element={<LorvenMillerCity/>}/>

          </Routes>
      </Router>

    </div>
  );
}

export default App;
