import './test.css'

import { gsap } from 'gsap'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function fetchFakeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, color: 'blue' },
        { id: 2, color: 'red' },
        { id: 3, color: 'purple' },
      ])
    }, 2000)
  })
}

function Box({ children, color }) {
  return <div className={`box ${color}`}>{children}</div>
}

const StartPage = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)

  const header = React.createRef()
  const [data, setData] = useState([])
  const [loadingState, setLoadingState] = useState()

  useEffect(() => {
    if (loadingState !== 'start') return

    const loadData = async () => {
      const data = await fetchFakeData()
      setData(data)
      setLoadingState('complete')
    }
    loadData()
  }, [loadingState])

  useLayoutEffect(() => {
    if (loadingState !== 'complete') return

    gsap.fromTo(
      q('.box'),
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
      }
    )
  }, [loadingState])

  useEffect(() => {
    gsap.fromTo(
      header.current,
      { opacity: 0, color: '#2aa34b', scale: 1 },
      { opacity: 1, color: '#4bf005', scale: 1.2, duration: 2 }
    )
  }, [header])

  const startLoading = () => {
    if (!loadingState) setLoadingState('start')
  }

  return (
    <div className="flex-row h-screen bg-gray-600 p-6">
      <div
        className="w-full flex justify-center items-center h-auto font-bold"
        style={{ fontSize: '35px' }}
      >
        <h1 className="h=32 text-justify" ref={header}>
          {' '}
          Hello Gasp Animations
        </h1>
      </div>

      <div className="w-full pt-4">
        <div className="h=32 flex justify-center items-center h-screen">
          {!loadingState ? (
            <button
              className="text-blue-600 outline-cyan-500 w-64"
              onClick={startLoading}
            >
              Start Loading
            </button>
          ) : null}
          {loadingState === 'start' ? <div>loading components... </div> : null}
          {data.map((item) => (
            <div className="text-blue-300" key={item.id} {...item}>
              Box {item.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default StartPage
