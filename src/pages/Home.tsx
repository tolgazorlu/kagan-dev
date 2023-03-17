import About from '../components/About'
import { motion } from 'framer-motion'
import Assets from '../components/Assets'

export default function Home() {

  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit = {{opacity: 0}}
    >
      <About />
      <Assets />
    </motion.div>
      
  )
}
