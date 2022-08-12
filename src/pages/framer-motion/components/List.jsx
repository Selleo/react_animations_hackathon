import '../styles/list.css'

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const LIST_DATA = [
  {
    id: uuidv4(),
    name: 'Hello there',
    description: 'This is a very long text',
    date: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Hai',
    description: 'This is a very long text',
    date: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Wassup',
    description: 'This is a very long text',
    date: new Date(),
  },
  {
    id: uuidv4(),
    name: 'This is very nice',
    description: 'This is a very long text',
    date: new Date(),
  },
  {
    id: uuidv4(),
    name: 'Hello',
    description: 'This is a very long text',
    date: new Date(),
  },
]

export const List = () => {
  const [listData, setListData] = useState(LIST_DATA)

  const removeItem = (id) => {
    setListData((oldData) => {
      const oldDataWithoutOneItem = oldData.filter((i) => i.id !== id)
      return oldDataWithoutOneItem
    })
  }

  const addItem = () => {
    const id = uuidv4()
    setListData((oldData) => {
      const newItem = {
        id,
        name: 'Hello',
        description: `This is a description of ${id}`,
        date: new Date(),
      }
      return [...oldData, newItem]
    })
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
          {listData.map(({ id, name }, idx) => {
            return (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: idx * 0.05 },
                }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="list-item rounded bg-purple-200"
                layout="position"
                key={id}
              >
                <p className="text-purple-900 text-lg">{name}</p>
                <button
                  className="list-remove-button text-purple-800 inline-block"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
      <motion.button
        key="add-button"
        layout
        className="px-3 py-2 rounded text-green-800 bg-green-300 inline-block "
        onClick={addItem}
      >
        Add New Todo
      </motion.button>
    </AnimateSharedLayout>
  )
}
