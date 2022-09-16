import { List } from './List'
import Loader from './Loader'
import { TextField } from './TextField'

export const Main = () => {
  return (
    <div>
      <Loader />
      React spring
      <TextField />
      <br />
      <List />
    </div>
  )
}
