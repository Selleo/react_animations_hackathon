import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useRef, useState } from 'react'

export const ListItem = ({
  isDragOn,
  idx,
  name,
  id,
  onRemove,
  date,
  description,
}) => {
  const [opened, setOpened] = useState(false)
  const nameRef = useRef()
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
        className="list-none p-4 drop-shadow-sm rounded bg-purple-200 flex-col"
        key={id}
      >
        <motion.div
          layoutId="top-content"
          className="flex justify-between items-center w-full"
        >
          <motion.h1
            ref={nameRef}
            style={{
              outline: 'none',
              padding: '4px',
              maxWidth: '70%',
            }}
            whileFocus={{
              outline: '1px dashed rgb(88 28 135)',
              backgroundColor: 'white',
            }}
            className="text-purple-900 font-bold text-lg"
            contentEditable
            onBlur={(e) => {
              if (!e.target.textContent.length)
                nameRef.current.textContent = '<Empty title>'
            }}
          >
            {name}
          </motion.h1>
          <div className="flex gap-8">
            <button
              className="list-remove-button items-center font-semibold flex gap-2 text-purple-800 p-2"
              onClick={(e) => {
                e.stopPropagation()
                onRemove(id)
              }}
            >
              Remove
              <svg
                width={12}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  style={{ fill: 'rgb(107 33 168)' }}
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </button>
            <button
              className="list-remove-button flex gap-2 items-center font-semibold  text-purple-800"
              onClick={(e) => {
                e.stopPropagation()
                setOpened((s) => !s)
              }}
            >
              {opened ? 'Close' : 'Open'}
              <svg
                width={12}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <motion.path
                  style={{ fill: 'rgb(107 33 168)' }}
                  animate={{ rotate: opened ? 180 : 0 }}
                  d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15 } }}
              exit={{ opacity: 0 }}
              className="mt-4"
            >
              <p className="text-purple-800 tracking-wide text-xs font-bold">
                DESCRIPTION
              </p>
              <p>{description}</p>

              <p className="text-purple-800 tracking-wide mt-4 text-xs font-bold">
                DATE & TIME
              </p>
              <p>
                {date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimateSharedLayout>
  )
}
