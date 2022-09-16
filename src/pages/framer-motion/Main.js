import './styles/main.css'

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
      <div className="text-xl	uppercase tracking-wide text-purple-400 text-center">
        Framer motion
      </div>
      <Form />
      <List />
    </>
  )
}
