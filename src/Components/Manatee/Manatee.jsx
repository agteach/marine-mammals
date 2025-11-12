import React from "react";
import sky from "../../assets/sky.jpg"
const Manatee = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Manatee</h2>
      <img
        src={sky}
        alt="Manatee"
        className="mx-auto w-80 h-60 object-cover rounded-2xl shadow-md mb-4"
      />
      <p className="text-gray-700 max-w-lg mx-auto">
        Manatees, also called “sea cows,” are gentle, slow-moving marine mammals
        that live in shallow coastal waters and rivers. They feed mainly on
        seagrass and are known for their calm, friendly nature.
      </p>
    </div>
  );
};

export default Manatee;
