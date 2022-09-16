import List from 'pages/react-motion/List'
import Maps from 'pages/react-motion/Map'
import { useState } from 'react'
import { spring } from 'react-motion'
import { Motion } from 'react-motion/lib/react-motion'
import { useInterval } from 'react-use'

export const Main = () => {
  const [step, setStep] = useState(0)

  useInterval(() => {
    setStep((current) => (current + 1) % 3)
  }, 5000)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      {step === 0 && <Maps />}
      {step === 1 && (
        <Motion
          defaultStyle={{ x: 0 }}
          style={{
            x: spring(720, { stiffness: 1, damping: 1, precision: 5 }),
          }}
        >
          {(value) => (
            <div
              style={{
                transform: `rotate(${value.x}deg)`,
                display: 'inline',
                width: '200px',
                position: 'fixed',
                fontSize: '72px',
                top: '50%',
                left: '50%',
              }}
            >
              Loading...
            </div>
          )}
        </Motion>
      )}
      {step === 2 && <List />}
    </div>
  )
}
