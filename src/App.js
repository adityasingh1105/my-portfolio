import About from "./Component/About/About";
import Herosection from "./Component/Herosection/Herosection";
import Navbar from "./Component/Navbar/Navbar";
import Skills from "./Component/Skills/Skills";

import AOS from "aos";

function App() {
  return (
    <>
      <Navbar />
      <>
        <Herosection />
        <About />
        <Skills />
      </>
    </>
  );
}

export default App;
