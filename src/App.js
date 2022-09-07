import React from "react";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <>
       <NavBar/>
       <Hero/>
       <Main/>
       <Featured/>
       <Footer/>
     </>
  );
}

export default App;
