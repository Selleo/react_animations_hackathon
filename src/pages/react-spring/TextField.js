import { useRef } from 'react'
import { animated, useSpring } from 'react-spring'

import car from './springTextFieldImg.png'

export const TextField = () => {
  const inputRef = useRef(null)
  const [animatedProps, api] = useSpring(() => ({
    from: {
      x: -400,
    },
    to: {
      x: -190,
    },
    config: { duration: 1000 },
  }))

  const onClick = () => {
    inputRef.current.focus()
    api.start(() => ({
      from: {
        x: -190,
      },
      to: {
        x: 0,
      },
      config: { duration: 1000 },
    }))
  }
  const onBlur = () => {
    console.log(inputRef)
    if (inputRef.current.value) return null

    api.start(() => ({
      from: {
        x: -400,
      },
      to: {
        x: -190,
      },
      config: { duration: 1000 },
    }))
  }

  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9\.\_]+\@@{1}[a-zA-Z0-9]+\.\w{2,4}$/
    if (!regex.test(inputRef.current.value))
      alert('Please enter valid email id')
  }

  return (
    <div style={{ width: '200px', overflow: 'hidden' }}>
      <animated.div style={{ display: 'flex', ...animatedProps }}>
        <animated.input
          ref={inputRef}
          onBlur={onBlur}
          style={{ minWidth: '200px', maxWidth: '200px' }}
          // contentEditable="true"
        />
        <animated.div
          onClick={onClick}
          style={{ width: '200px', display: 'flex' }}
        >
          Type something{' '}
          <animated.img src={car} alt="" width="80" maxHeight="40" />
        </animated.div>
      </animated.div>
      <button onClick={validateEmail}>Submit</button>
    </div>
  )
}
