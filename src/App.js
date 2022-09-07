import React from "react";
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Featured from "./components/featured/Featured";

function App() {
  return (
   <>
       <NavBar/>
       <Hero/>
       <Main/>
       <Featured/>
     </>
  );
}

export default App;
