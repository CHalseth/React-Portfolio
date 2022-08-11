import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App () {
  const [navChoices] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Resume" },
    { name: "Contact" },
  ]);
  const [currentChoice, setCurrentChoice] = useState(navChoices[0]);
  return (
    <div>
      <Nav
        navChoices={navChoices}
        setCurrentChoice={setCurrentChoice}
        currentChoice={currentChoice}>
        </Nav>
      <main>
        <>
          {currentChoice.name === "About Me" && <About></About>}
          {currentChoice.name === "Portfolio" && <Portfolio></Portfolio>}
          {currentChoice.name === "Contact" && <ContactForm></ContactForm>}
          {currentChoice.name === "Resume" && <Resume></Resume>}
          </>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;