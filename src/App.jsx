import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Manatee from "./Components/Manatee/Manatee";
import Whale from "./Components/Whale/Whale";
import Narwhal from "./Components/Narwhal/Narwhal";

const App = () => {
  return (
    <BrowserRouter>
      <header className="text-center py-4 flex justify-between items-center px-6 bg-gray-50 shadow-sm">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          #VANLIFE
        </Link>

        <nav className="flex justify-center mb-8 space-x-6 mt-4">
          <Link to="/manatee" className="hover:text-blue-500">
            Manatee
          </Link>
          <Link to="/narwhal" className="hover:text-blue-500">
            Narwhal
          </Link>
          <Link to="/whale" className="hover:text-blue-500">
            Whale
          </Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </nav>
      </header>

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
       <nav className="flex justify-center fixed bottom-0 w-full z-50 space-x-8 mt-4 p-5 bg-gray-500 shadow-sm">
          <Link to="/manatee" className="hover:text-blue-500">
            Manatee
          </Link>
          <Link to="/narwhal" className="hover:text-blue-500">
            Narwhal
          </Link>
          <Link to="/whale" className="hover:text-blue-500">
            Whale
          </Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
        </nav>
    </BrowserRouter>
  );
};

export default App;
