import React from "react";
import whale from "../../assets/whale.jpg"
const Whale = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Whale</h2>
      <img
        src={whale}
        alt="Whale"
        className="mx-auto w-80 h-60 object-cover rounded-2xl shadow-md mb-4"
      />
      <p className="text-gray-700 max-w-lg mx-auto">
        Whales are the largest animals on Earth and play a vital role in the
        ocean ecosystem. From humpbacks to blue whales, these magnificent
        creatures are known for their intelligence and songs.
      </p>
    </div>
  );
};

export default Whale;
