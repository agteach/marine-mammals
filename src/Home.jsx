import React from "react";
import orcas from "./assets/orcas.jpg"
const Home = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Welcome to Marine Mammals World 🌍
      </h2>
      <img
        src={orcas}
        alt="Marine mammals"
        className="mx-auto w-80 h-60 object-cover rounded-2xl shadow-md mb-4"
      />
      <p className="text-gray-700 max-w-lg mx-auto">
        Dive into the fascinating world of marine mammals — from manatees and
        narwhals to mighty whales. Discover their beauty, intelligence, and the
        vital roles they play in keeping our oceans healthy.
      </p>
    </div>
  );
};

export default Home;
