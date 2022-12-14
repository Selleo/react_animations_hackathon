import './main.css'

import React, { useState } from 'react'
import { spring } from 'react-motion'
import Motion from 'react-motion/lib/Motion'

export const Third = () => {
  const [state, setState] = useState({
    fontSize: 16,
    position: 'static',
    bottom: 0.75,
    left: 1,
  })
  const [value, setValue] = useState('')

  const handleClick = () => {
    setState({
      bottom: spring(3, { stiffness: 250, damping: 10 }),
      left: spring(1.3, { stiffness: 50, damping: 50 }),
      fontSize: spring(10, { stiffness: 170, damping: 26, precision: 0.5 }),
      position: 'absolute',
    })
  }

  const handleBlur = () => {
    if (!value)
      setState({
        bottom: spring(0.75, { stiffness: 50, damping: 10 }),
        left: spring(1, { stiffness: 50, damping: 50 }),
        fontSize: spring(16, { stiffness: 170, damping: 26, precision: 0.5 }),
        position: 'static',
      })
  }

  return (
    <div>
      <Motion defaultStyle={{ scale: 0.5, top: 0 }} style={state}>
        {(interpolatedStyle) => (
          <div
            className={'input-wrapper'}
            onFocus={handleClick}
            onBlur={handleBlur}
          >
            <span
              style={{
                position: interpolatedStyle.position,
                bottom: `${interpolatedStyle.bottom}rem`,
                left: `${interpolatedStyle.left}rem`,
                fontSize: `${interpolatedStyle.fontSize}px`,
              }}
              onClick={handleClick}
              className={'label'}
            >
              Type your name...
            </span>
            <input
              className={'input'}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        )}
      </Motion>
      <input type="text" />
    </div>
  )
}
