import { gsap } from 'gsap'
import { useEffect, useRef, useState } from 'react'
import Loading from './Loading'

import TextInput from './../Pages/TextInput'
import List from './List'

function fetchComponents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, component: <TextInput /> },
        { id: 2, component: <List /> },
      ])
    }, 3000)
  })
}

const StartPage = () => {
  const header = useRef()
  const [data, setData] = useState([])
  const [loadingState, setLoadingState] = useState()

  useEffect(() => {
    if (loadingState !== 'start') return

    const loadData = async () => {
      const data = await fetchComponents()
      setData(data)
      setLoadingState('complete')
    }
    loadData()
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
    <div className="min-h-screen flex-row bg-gray-800 p-6">
      <div
        className="w-full flex justify-center items-center h-auto font-bold"
        style={{ fontSize: '35px' }}
      >
        <h1 className="text-justify" ref={header}>
          Hello Gasp Animations
        </h1>
      </div>

      <div className="mt-24 flex justify-center">
        {!loadingState ? (
          <button
            className="text-white outline-cyan-500 border-2 rounded-lg	py-2 px-4"
            onClick={startLoading}
          >
            Start Loading
          </button>
        ) : null}

        {loadingState === 'start' ? (
          <div class="flex justify-center items-center">
            <Loading />
          </div>
        ) : loadingState === 'complete' ? (
          <div className="flex flex-col">
            {data.map((item) => (
              <div key={item.id}>{item.component}</div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default StartPage
