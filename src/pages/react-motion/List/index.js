import React, { useEffect, useState } from 'react'
import { presets, spring } from 'react-motion'
import { Motion, StaggeredMotion } from 'react-motion/lib/react-motion'
import { useLocalStorage } from 'react-use'

const listItems = [
  { id: 1, title: 'Item 1', description: 'Description' },
  { id: 2, title: 'Item 2', description: 'Description' },
  { id: 3, title: 'Item 3', description: 'Description' },
  { id: 4, title: 'Item 4', description: 'Description' },
  { id: 5, title: 'Item 5', description: 'Description' },
  { id: 6, title: 'Item 6', description: 'Description' },
  { id: 7, title: 'Item 7', description: 'Description' },
  { id: 8, title: 'Item 8', description: 'Description' },
  { id: 9, title: 'Item 9', description: 'Description' },
  { id: 10, title: 'Item 10', description: 'Description' },
  { id: 11, title: 'Item 11', description: 'Description' },
]

const List = () => {
  const [state] = useState({ x: 400, y: 50 })
  const [globalState, setGlobalState] = useState()
  const [localStorageItems, setValue] = useLocalStorage('listItems', listItems)

  const getStyles = (prevStyles) => {
    // `prevStyles` is the interpolated value of the last tick
    const endValue = prevStyles.map((item, i) => {
      return i === 0
        ? state
        : {
            x: spring(prevStyles[i - 1].x, presets.gentle),
            y: spring(prevStyles[i - 1].y + 10, presets.gentle),
          }
    })
    return endValue
  }

  const handleDeleteItem = (itemId) => {
    //doesn't work due to <StaggeredMotion> is only for fixed length lists
    const newItems = localStorageItems.filter((item) => item.id !== itemId)
    setValue(newItems)
  }

  const handleAnimatadRemove = (itemIndex, items) => {
    const copyState = [...items]
    const oldState = copyState[itemIndex]
    const newState = {
      ...oldState,
      x: spring(-800, { stiffness: 160, damping: 25 }),
      clicked: true,
    }
    copyState[itemIndex] = newState
    setGlobalState(copyState)
  }
  return (
    <>
      <StaggeredMotion
        defaultStyles={localStorageItems.map((item) => ({
          x: 0,
          y: 0,
        }))}
        styles={getStyles}
      >
        {(items) => {
          return (
            <div className="demo1">
              {items.map(({ x, y }, i) => {
                return (
                  <Motion
                    key={i}
                    defaultStyle={{ x: x, y: y }}
                    style={
                      globalState
                        ? { x: globalState[i].x, y: globalState[i].y }
                        : { x: x, y: y }
                    }
                    onRest={() => {
                      if (globalState && globalState[i]?.clicked)
                        handleDeleteItem(localStorageItems[i].id)
                    }}
                  >
                    {(interpolatingStyle) => (
                      <div
                        className={`demo1-ball ball-${i}`}
                        style={{
                          WebkitTransform: `translate3d(${
                            interpolatingStyle.x - 25
                          }px, ${interpolatingStyle.y - 25}px, 0)`,
                          transform: `translate3d(${
                            interpolatingStyle.x - 25
                          }px, ${interpolatingStyle.y - 25}px, 0)`,
                          zIndex: items.length - i,
                          height: '50px',
                          display: 'flex',
                          width: '300px',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div
                          style={{
                            background: i % 2 === 0 ? 'hotpink' : 'greenyellow',
                            flexGrow: 1,
                          }}
                        >
                          {localStorageItems && localStorageItems[i]?.title}
                        </div>
                        <button
                          type="button"
                          style={{
                            backgroundColor: 'red',
                            marginLeft: '12px',
                            padding: '5px',
                          }}
                          onClick={() => handleAnimatadRemove(i, items)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </Motion>
                )
              })}
            </div>
          )
        }}
      </StaggeredMotion>
    </>
  )
}

export default List
