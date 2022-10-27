import '../styles/list.css'

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Input from '../components/Input.js'
import { ListItem } from './ListItem'

const LIST_DATA = [
  {
    id: uuidv4(),
    name: 'Hello there',
    description: 'Try adding more items!!',
    date: new Date(),
  },
]

export const List = () => {
  const [listData, setListData] = useState(LIST_DATA)
  const [isDragOn, setIsDragOn] = useState(false)
  const [todo, setTodo] = useState('')
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'))
  const [inputError, setInputError] = useState('')
  const addNewTodoRef = useRef()

  const removeItem = (id) => {
    setListData((oldData) => {
      const oldDataWithoutOneItem = oldData.filter((i) => i.id !== id)
      return oldDataWithoutOneItem
    })
  }

  const handleOnChange = (e) => {
    setTodo(e.target.value)
  }

  const addItem = (e) => {
    e.preventDefault()
    if (!todo)
      return setInputError(
        "You need to give a title to your todo or he'll be sad :c"
      )
    else setInputError('')

    const id = uuidv4()
    setListData((oldData) => {
      const newItem = {
        id,
        name: todo,
        description: `This is a description of ${id}`,
        date: new Date(date),
      }
      return [...oldData, newItem]
    })
    setTodo('')
    setTimeout(() => {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, 0)
  }

  return (
    <AnimateSharedLayout>
      <motion.h1
        className="font-bold text-4xl mb-6 mt-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        key="title"
      >
        Hello Todo List!
      </motion.h1>

      <motion.div key="list" layout className="list mb-4">
        <AnimatePresence>
          {listData.map(({ id, date, name, description }, idx) => {
            return (
              <ListItem
                key={id}
                name={name}
                idx={idx}
                id={id}
                description={description}
                isDragOn={isDragOn}
                date={date}
                onRemove={removeItem}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>

      <motion.form className="flex flex-col" layout onSubmit={addItem}>
        <Input
          onChange={handleOnChange}
          value={todo}
          error={inputError}
          label="Whatcha wanna do?!"
          type="text"
        />
        <Input
          label="Date"
          type="date"
          error=""
          onChange={(e) => {
            setDate(e.target.value)
          }}
          value={date}
        />
        <motion.div layout="position" className="flex gap-6 mt-4">
          <motion.button
            key="add-button"
            type="submit"
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            ref={addNewTodoRef}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            className="px-4 py-2 rounded text-green-800 bg-green-300 inline-block "
            onClick={addItem}
          >
            Add New Todo
          </motion.button>
          <motion.button
            key="delete-all"
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            className="px-4 py-2 rounded text-red-800 bg-red-300 inline-block "
            onClick={(e) => {
              e.preventDefault()
              setListData([])
            }}
          >
            Delete all
          </motion.button>
          <motion.button
            key="yeet-mode"
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.8 } }}
            whileFocus={{ scale: 1.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.99 }}
            className="px-4 py-2 rounded text-blue-600 bg-blue-300 inline-block "
            onClick={(e) => {
              e.preventDefault()
              setIsDragOn((s) => !s)
            }}
          >
            YeetMode™: {isDragOn ? 'On' : 'Off'}
          </motion.button>
        </motion.div>
      </motion.form>
    </AnimateSharedLayout>
  )
}
