import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Fade from "react-reveal/Fade";

import { BrowserRouter as Router } from "react-router-dom";
// import Logo from "./logo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Slider from "react-slick";
import Section3 from "./components/Section3";
function App() {
  return (
    <div id="section1">
      <Router>
        <Navbar />
      </Router>
      <Section1 />
      <Section2 />
      <Fade left>
        <Section3 />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
