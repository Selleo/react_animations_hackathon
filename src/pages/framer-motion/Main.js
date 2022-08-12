import { useEffect, useState } from 'react'

import { Form } from './components'
import ListLoader from './components/ElementsLoader'
import { List } from './components/List'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(loadingTimeout)
  }, [])

  if (isLoading) return <ListLoader number={20} />
  return (
    <>
      <div>Framer motion</div>
      <Form />
      <List />
    </>
  )
}
