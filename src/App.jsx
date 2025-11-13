import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Manatee from "./Components/Manatee/Manatee";
import Whale from "./Components/Whale/Whale";
import Narwhal from "./Components/Narwhal/Narwhal";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <main className="pt-25 pb-24">
         <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">
        Marine Mammals
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/manatee" element={<Manatee />} />
        <Route path="/narwhal" element={<Narwhal />} />
        <Route path="/whale" element={<Whale />} />
        <Route
          path="*"
          element={<h2 className="text-red-600 text-center">Page not found</h2>}
        />
      </Routes>
      </main>
       <Footer/>
       
    </BrowserRouter>
  );
};

export default App;
