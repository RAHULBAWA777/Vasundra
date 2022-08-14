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
// import GolfView from "./components/currentProjects/GolfView";
// import FortView from "./components/currentProjects/FortView";
// import LakeView from "./components/currentProjects/LakeView";
import TempleView from "./components/currentProjects/TempleView";
import ThemeCresta from "./components/futureProjects/ThemeCresta";
import ThemeFort from "./components/futureProjects/ThemeFort";
import Contact from "./components/contact/Contact";
import CompletedProjects from "./components/completedProjects/CompletedProjects";
import Project from "./components/currentProjects/Project";
import ThemeElite from "./components/futureProjects/ThemeElite";
import ThemeLakeville from "./components/futureProjects/ThemeLakeville";
import ThemeWhisperValley from "./components/futureProjects/ThemeWhisperValley";
import ThemeGrandeur from "./components/futureProjects/ThemeGrandeur";
import ThemePalmSpring from "./components/futureProjects/ThemePalmSpring";


function App() {

  return (
    <div className="App">
      <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<FrontPageContent/>} />
            <Route exact path="/about" element={<AboutUs/>} />
          
            <Route exact path="/TirupatiTempleTown" element={<TempleView/>} />
            <Route exact path="/ThemeFortVista" element={<ThemeFort/>} />
            <Route exact path="/ThemeCrest" element={<ThemeCresta/>} />
            <Route exact path="/contact" element={<Contact/>} />
            
            <Route exact path="/comProjects" element={<CompletedProjects/>} />
            <Route exact path="/project" element={<Project/>} />

            <Route exact path="/ThemeCrest" element={<ThemeCresta/>} />
            <Route exact path="/Elite" element={<ThemeElite/>} />
            <Route exact path="/Lakeville" element={<ThemeLakeville/>} />
            <Route exact path="/whisperValley" element={<ThemeWhisperValley/>} />
            <Route exact path="/Grandeur" element={<ThemeGrandeur/>} />
            <Route exact path="/palmSpring" element={<ThemePalmSpring/>} />

          </Routes>
      </Router>

     
     
    </div>
  );
}

export default App;
