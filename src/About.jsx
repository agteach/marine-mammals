import React from "react";
import animals from "./assets/animals.jpg"
const About = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-semibold text-blue-700 mb-4">
        ℹ️ About Marine Mammals Project
      </h1>

      <img
        src={animals}
        alt="Marine mammals"
        className="mx-auto w-80 h-60 object-cover rounded-2xl shadow-md mb-4"
      />

      <p className="text-gray-700 max-w-2xl mx-auto text-lg">
        This project is a simple React application that introduces you to some
        of the most fascinating marine mammals on Earth — the manatee, narwhal,
        and whale. Each page provides basic information, images, and insights
        into these incredible creatures that inhabit our oceans.
      </p>

      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Built with <span className="font-semibold text-blue-500">React</span> and
        styled using <span className="font-semibold text-blue-500">Tailwind CSS</span>,
        this app demonstrates routing, components, and clean UI design.
      </p>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Built with <span className="font-semibold text-blue-500">React</span> and
        styled using <span className="font-semibold text-blue-500">Tailwind CSS</span>,
        this app demonstrates routing, components, and clean UI design.
      </p>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Built with <span className="font-semibold text-blue-500">React</span> and
        styled using <span className="font-semibold text-blue-500">Tailwind CSS</span>,
        this app demonstrates routing, components, and clean UI design.
      </p>
    </div>
  );
};

export default About;
