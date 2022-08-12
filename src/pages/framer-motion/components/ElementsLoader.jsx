import '../styles/ElementsLoader.css'

import { motion } from 'framer-motion'

const ElementsLoader = ({ number }) => {
  const fakeDivs = Array.from({ length: number }, (_, k) => k)
  const diagonalIndex = 360 / number

  return (
    <motion.div
      className="list-loader"
      animate={{ '--base-hue': 320 }}
      initial={{ '--base-hue': 269 }}
      transition={{ duration: 2, loop: Infinity, ease: 'backOut' }}
    >
      {fakeDivs.map((_, index) => (
        <motion.div
          key={index}
          className="list-loader__element"
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragElastic={0.8}
          style={{
            backgroundColor: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 100%, 92%, 1)`,
          }}
        ></motion.div>
      ))}
    </motion.div>
  )
}

export default ElementsLoader
