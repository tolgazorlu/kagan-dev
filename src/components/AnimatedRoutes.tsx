import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from '../components/About'
import Assets from "./Assets";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </AnimatePresence>
  );
}
