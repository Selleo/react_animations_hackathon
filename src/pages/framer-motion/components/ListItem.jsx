import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

export const ListItem = ({
  isDragOn,
  idx,
  name,
  id,
  onRemove,
  description,
}) => {
  const [opened, setOpened] = useState(false)
  return (
    <AnimateSharedLayout>
      <motion.div
        drag={isDragOn}
        layout
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: idx * 0.05 },
        }}
        exit={{ opacity: 0, scale: 1.05 }}
        className="list-none p-4 drop-shadow-sm cursor-pointer rounded bg-purple-200 flex-col"
        key={id}
        onClick={() => setOpened((s) => !s)}
      >
        <motion.div
          layoutId="top-content"
          className="flex justify-between w-full"
        >
          <h1 className="text-purple-900 font-bold text-lg">{name}</h1>
          <button
            className="list-remove-button text-purple-800 inline-block"
            onClick={(e) => {
              e.stopPropagation()
              onRemove(id)
            }}
          >
            Remove
          </button>
        </motion.div>
        <AnimatePresence>
          {opened && (
            <motion.p
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15 } }}
              exit={{ opacity: 0 }}
              className="mt-6"
              key="paragraph"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  )
}
