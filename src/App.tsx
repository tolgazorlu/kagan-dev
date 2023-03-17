import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Assets from "./components/Assets";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <About />
        <Assets />
      </BrowserRouter>
      
    </div>
  );
}
