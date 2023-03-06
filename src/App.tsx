import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  )
}
