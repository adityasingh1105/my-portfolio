import About from "./Component/About/About";
import Herosection from "./Component/Herosection/Herosection";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <>
        <Herosection />
        <About />
        <Skills />
        <Services />
      </>
    </>
  );
}

export default App;
