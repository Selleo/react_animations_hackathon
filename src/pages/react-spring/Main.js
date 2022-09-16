import { useEffect, useState } from 'react'

import { List } from './List'
import Loader from './Loader'
import { TextField } from './TextField'

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    return () => clearTimeout(t)
  })

  if (isLoading) return <Loader />

  return (
    <div>
      <TextField />
      <br />
      <List />
    </div>
  )
}
