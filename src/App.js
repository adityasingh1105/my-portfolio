import About from "./Component/About/About";
import Herosection from "./Component/Herosection/Herosection";
import Navbar from "./Component/Navbar/Navbar";
import Project from "./Component/Project/Project";
import Services from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";

function App() {
  alert("Wroking on responsive part");
  return (
    <>
      <Navbar />
      <>
        <Herosection />
        <About />
        <Skills />
        <Services />
        <Project />
      </>
    </>
  );
}

export default App;
