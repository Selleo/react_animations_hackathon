import '../styles/list.css'

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
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
    const id = uuidv4()
    setListData((oldData) => {
      const newItem = {
        id,
        name: todo,
        description: `This is a description of ${id}`,
        date: new Date(),
      }
      return [...oldData, newItem]
    })
    setTodo('')
  }

  return (
    <AnimateSharedLayout>
      <motion.h1
        className="font-bold text-4xl mb-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key="title"
      >
        Hello Todo List!
      </motion.h1>

      <motion.div key="list" layout className="list mb-4">
        <AnimatePresence>
          {listData.map(({ id, name, description }, idx) => {
            return (
              <ListItem
                key={id}
                name={name}
                idx={idx}
                id={id}
                description={description}
                isDragOn={isDragOn}
                onRemove={removeItem}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>

      <form onSubmit={addItem}>
        <Input
          onChange={handleOnChange}
          value={todo}
          label="Whatcha wanna do?!"
          type="text"
        />
        <div className="flex gap-6 mt-4">
          <motion.button
            key="add-button"
            type="submit"
            layout
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
        </div>
      </form>
    </AnimateSharedLayout>
  )
}
