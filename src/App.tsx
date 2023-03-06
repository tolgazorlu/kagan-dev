import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  )
}
