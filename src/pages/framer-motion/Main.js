import './styles/main.css'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import ListLoader from './components/ElementsLoader'
import Form from './components/Form'
import { List } from './components/List'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

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
              <motion.div
                style={{ display: 'inline-block' }}
                initial={{ width: '5ch' }}
                animate={{ width: '2ch' }}
              ></motion.div>
            )

          return (
            <motion.span
              className="font-bold m-0 leading-none text-purple-400"
              style={{ position: 'relative', display: 'inline-block' }}
              initial={{
                top: '50vh',
                y: 'calc(-50% - 88px)',
                fontSize: '10rem',
                opacity: 0.5,
              }}
              onAnimationComplete={() => {
                if (index !== 12) return
                setShowContent(true)
              }}
              animate={{
                y: 0,
                top: 0,
                transition: { delay: 0.05 * index },
                fontSize: '3.75rem',
                opacity: 1,
                //   x: 0,
                rotate: 0,
                color: `hsl(${index * 5 + 250} 80 45)`,
              }}
            >
              {letter}
            </motion.span>
          )
        })}
      </div>
      {showContent && (
        <>
          <Form />
          <List />
        </>
      )}
    </>
  )
}
