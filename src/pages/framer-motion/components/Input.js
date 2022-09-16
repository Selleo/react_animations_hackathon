import { AnimatePresence, motion } from 'framer-motion'
import { isEmpty } from 'lodash'
import { useState } from 'react'

const Input = ({ label, type, error, onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false)

  const animateLabel = () => setIsFocused((prevState) => !prevState)

  return (
    <div class="w-full mt-2 md:w-1/2 px-3 mb-6 md:mb-0">
      <motion.label
        class="block uppercase tracking-wide text-purple-700 text-xs font-bold mb-2"
        for="grid-first-name"
        animate={{
          opacity: isFocused ? 1 : 0,
          y: isFocused ? 0 : 30,
          color: isEmpty(error) ? 'rgb(126 34 206)' : 'red',
        }}
        initial={{
          opacity: 0,
          y: 30,
        }}
      >
        {label}
      </motion.label>

      <motion.input
        class={`bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 `}
        defaultValue={
          type === 'date' ? new Date().toLocaleDateString('en-CA') : ''
        }
        animate={
          !isEmpty(error)
            ? {
                borderColor: 'red',
              }
            : {}
        }
        id="grid-first-name"
        onBlur={animateLabel}
        onFocus={animateLabel}
        placeholder={isFocused ? '' : label}
        type={type}
        whileFocus={{ scale: 1.1 }}
        onChange={onChange}
        value={value}
      />
      {!isEmpty(error) && (
        <AnimatePresence>
          <motion.error
            class="text-red-500 block"
            for="grid-first-name"
            key={error}
            animate={
              !isEmpty(error)
                ? {
                    opacity: 1,
                    y: 10,
                  }
                : {}
            }
            exit={() => {
              return { color: 'white' }
            }}
            initial={{
              opacity: 0,
              y: 0,
            }}
          >
            {error}
          </motion.error>
        </AnimatePresence>
      )}
    </div>
  )
}

export default Input
