import React from "react";
import narwhal from "../../assets/narwhal.jpg"
const Narwhal = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Narwhal</h2>
      <img
        src={narwhal}
        className="mx-auto w-80 h-60 object-cover rounded-2xl shadow-md mb-4"
      />
      <p className="text-gray-700 max-w-lg mx-auto">
        Narwhals are Arctic whales famous for their long spiral tusk, which is
        actually an extended tooth. Often called the “unicorns of the sea,” they
        live in icy northern waters.
      </p>
    </div>
  );
};

export default Narwhal;
