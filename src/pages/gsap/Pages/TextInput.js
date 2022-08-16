import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import classes from './TextInput.module.css'

const TextInput = () => {
  const [text, setText] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const placeholderText = useRef()
  const sendBtn = useRef()
  const errorMsg = useRef()

  const hoverEffectHandler = () => {
    if (!text && !isTouched)
      gsap.to(placeholderText.current, { x: 30, duration: 0.5, ease: 'bounce' })
  }

  const unhoverEffectHandler = () => {
    if (!text && !isTouched) gsap.to(placeholderText.current, { x: 0 })
  }

  const blurEffectHandler = () => {
    if (!text && isTouched)
      gsap.to(placeholderText.current, {
        x: 0,
        y: 0,
        color: '#ccc',
        fontSize: '18px',
      })
  }

  const clickEffectHandler = () => {
    setIsTouched(true)
    gsap.to(placeholderText.current, {
      x: 0,
      y: 35,
      color: 'blue',
      fontSize: '15px',
    })
  }

  const sendHandler = () => {
    if (text.length === 0) {
      setIsDisabled(true)
      gsap.to(sendBtn.current, {
        duration: 1,
        rotationX: 180,
        y: 34,
        backgroundColor: 'red',
        color: '#d14848',
      })
      gsap.to(errorMsg.current, {
        duration: 1,
        scale: 1,
        rotationZ: 720,
        opacity: 1,
        top: '20px',
      })
      return
    } else {
      setText('')
      setIsTouched(false)
      gsap.to(placeholderText.current, {
        x: 0,
        y: 0,
        color: '#ccc',
        fontSize: '18px',
      })
    }
  }

  const onChangeHandler = (e) => {
    setText(e.target.value)
  }

  useEffect(() => {
    if (text.length > 0) {
      gsap.to(sendBtn.current, {
        duration: 1,
        rotationX: 0,
        y: 0,
        backgroundColor: '#fff',
        color: '#1f2937',
      })
      gsap.to(errorMsg.current, {
        duration: 1,
        scale: 0,
        rotationZ: 0,
        opacity: 0,
        top: 0,
      })
      setIsDisabled(false)
    }
  }, [text])

  return (
    <section className={classes.wrap}>
      <div className={classes.container}>
        <input
          type="text"
          className={classes.input}
          onMouseOver={hoverEffectHandler}
          onMouseLeave={unhoverEffectHandler}
          onClick={clickEffectHandler}
          onChange={onChangeHandler}
          onBlur={blurEffectHandler}
          value={text}
        />
        <div className={classes.placeholder} ref={placeholderText}>
          <p>name</p>
        </div>
      </div>
      <button
        type="button"
        className={classes.btn}
        onClick={sendHandler}
        ref={sendBtn}
        disabled={isDisabled}
      >
        SEND
      </button>
      <p ref={errorMsg} className={classes.error}>
        name cant be empty
      </p>
    </section>
  )
}

export default TextInput
