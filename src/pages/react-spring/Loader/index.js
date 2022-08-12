import { useState } from 'react'
import { animated, useSpring } from 'react-spring'

import car from './car.png'
import flag from './flag.png'

const Loader = () => {
  const [move, setMove] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const styles = useSpring({
    loop: true,
    to: [
      { transform: 'skew(0, 0)' },
      { transform: 'skew(0, 15deg)' },
      { transform: 'skew(0, -15deg)' },
      { transform: 'skew(0, 15deg)' },
    ],
    from: { transform: 'skew(0, 0)' },
  })

  const stylesRight = useSpring({
    loop: true,
    to: [
      { transform: 'skew(0, 0)' },
      { transform: 'skew(0, 15deg)' },
      { transform: 'skew(0, -15deg)' },
      { transform: 'skew(0, 15deg)' },
      { position: 'absolute' },
      { left: 300 },
    ],
    from: { transform: 'skew(0, 0)' },
  })

  const stylesDown = useSpring({
    loop: true,
    to: [
      { transform: 'skew(0, 0)' },
      { transform: 'skew(0, 15deg)' },
      { transform: 'skew(0, -15deg)' },
      { transform: 'skew(0, 15deg)' },
      { position: 'absolute' },
      { left: 300 },
      { top: 300 },
    ],
    from: { transform: 'skew(0, 0)' },
  })

  const renderStyles = () => {
    console.log('move', move)
    if (move === 'right') return stylesRight
    else if (move === 'down') return stylesDown
    else return styles
  }

  return (
    isLoading && (
      <>
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'white',
          }}
        >
          <animated.img style={renderStyles()} src={car} alt="car" />
          <img
            style={{
              width: 100,
              height: 100,
              position: 'fixed',
              top: '50%',
              left: '50%',
            }}
            src={flag}
            alt="flag"
          />
          <div style={{ position: 'fixed', right: 20, bottom: 20 }}>
            <button style={{ marginRight: 60 }} onClick={() => setMove('down')}>
              DOWN
            </button>
            <button onClick={() => setMove('right')}>RIGHT</button>
          </div>
        </div>
      </>
    )
  )
}

export default Loader
