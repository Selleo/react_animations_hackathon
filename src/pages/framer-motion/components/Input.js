import { motion } from 'framer-motion'
import { useState } from 'react'

const Input = ({ label, type }) => {
  const [isFocused, setIsFocused] = useState(false)

  const animateLabel = () => setIsFocused((prevState) => !prevState)

  return (
    <div class="w-full mt-2 md:w-1/2 px-3 mb-6 md:mb-0">
      <motion.label
        class="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2"
        for="grid-first-name"
        animate={
          isFocused
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        initial={{
          opacity: 0,
          y: 30,
        }}
      >
        {label}
      </motion.label>

      <motion.input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        defaultValue={
          type === 'date' ? new Date().toLocaleDateString('en-CA') : ''
        }
        id="grid-first-name"
        onBlur={animateLabel}
        onFocus={animateLabel}
        placeholder={isFocused ? '' : label}
        type={type}
        whileFocus={{ scale: 1.1 }}
      />
    </div>
  )
}

export default Input
