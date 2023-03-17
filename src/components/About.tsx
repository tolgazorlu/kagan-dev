import Flyme from "../assets/about/flyme.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="px-10 flex justify-center items-center flex-col sm:flex-col md:flex-row gap-2 md:gap-24">
        <div className="flex flex-col gap-4 w-2/6">
          <div className="text-4xl font-bold font-orbitron">
            <span className="text-black">KAGAN</span>{" "}
            <span className="text-cyan-500">AYTEN</span>
          </div>
          <div className="text-md">
            <span className="text-black font-orbitron">
              Indie Game Developer
            </span>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <p className="text-black">
              My name is Kagan Ayten. I am a Unity Developer, and I'm very
              passionate and dedicated to my work.
            </p>
          </div>
        </div>
        <div className="w-2/6 h-2/6 rounded-md">
          <img src={Flyme} />
        </div>
      </div>
    </motion.div>
  );
}
