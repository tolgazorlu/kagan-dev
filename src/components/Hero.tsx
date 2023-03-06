import React from "react";

export default function Hero() {
  return (
    <div className="h-5/6 w-full flex justify-center items-center flex-col gap-8 absolute">
      <div className=" text-4xl md:text-4xl lg:text-6xl font-bold font-orbitron">
        <span className="text-black">KAGAN</span>{" "}
        <span className="text-cyan-500">AYTEN</span>
      </div>
      <div className="text-2xl">
        <span className="text-black font-orbitron">Indie Game Developer</span>
      </div>
      <div>
        <button className="bg-gradient-to-r from-blue-500 to-cyan-600 px-10 py-2 rounded-lg font-bold text-white">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

