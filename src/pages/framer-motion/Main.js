import './styles/main.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ListLoader from './components/ElementsLoader'
import Form from './components/Form'
import { List } from './components/List'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(loadingTimeout)
  }, [])

  if (isLoading) return <ListLoader number={20} />
  return (
    <>
      <div className="flex justify-center">
        {'Framer motion'.split('').map((letter, index) => {
          if (letter === ' ')
            return (
              <div style={{ width: '0.75ch', display: 'inline-block' }}></div>
            )

          return (
            <motion.span
              className="text-6xl font-bold text-purple-400"
              style={{ position: 'relative', display: 'inline-block' }}
              initial={{
                y: 20,
                x: 10 * index,
                rotate: 30 * index,
                scale: index / 2,
                opacity: 0,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
                x: 0,
                rotate: 0,
                color: `rgb(200 ${15 * index} ${30 * index})`,
                transition: { delay: 0.05 * index },
              }}
            >
              {letter}
            </motion.span>
          )
        })}
      </div>
      <Form />
      <List />
    </>
  )
}
