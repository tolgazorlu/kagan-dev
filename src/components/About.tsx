import React from "react";
import Flyme from "../assets/about/flyme.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-start">
        <div className="w-1/2">
          <img src={Flyme} />
        </div>
        <div className="flex flex-col gap-4 md:w-3/12 h-80">
          <div className="text-4xl font-bold font-orbitron">
            <span className="text-black">KAGAN</span>{" "}
            <span className="text-cyan-500">AYTEN</span>
          </div>
          <div>
            <span>
              Indie Game Developer
            </span>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <p>
              My name is Kagan Ayten. I am a unity game developer, and I'm very
              passionate and dedicated to my work.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
