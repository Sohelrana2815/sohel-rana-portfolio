import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLinks />
    </>
  );
}

export default App;
