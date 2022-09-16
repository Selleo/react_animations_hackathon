import React, { useState } from 'react'
import { presets, spring } from 'react-motion'
import { StaggeredMotion } from 'react-motion/lib/react-motion'

const listItems = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
  { id: 11, title: 'Item 11' },
]

const List = () => {
  const [state, setState] = useState({ x: 400, y: 300 })
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
  return (
    <>
      <StaggeredMotion
        defaultStyles={listItems.map((item) => ({ x: 0, y: 0 }))}
        styles={getStyles}
      >
        {(items) => (
          <div className="demo1">
            {items.map(({ x, y }, i) => (
              <div
                key={i}
                className={`demo1-ball ball-${i}`}
                style={{
                  WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  zIndex: items.length - i,
                  height: '50px',
                  width: '100px',
                  background: i % 2 === 0 ? 'hotpink' : 'greenyellow',
                }}
              >
                {listItems[i].title}
              </div>
            ))}
          </div>
        )}
      </StaggeredMotion>
      {/*<button*/}
      {/*  onClick={() => setState(({ x, y }) => ({ x: x + 50, y: y - 10 }))}*/}
      {/*>*/}
      {/*  xd*/}
      {/*</button>*/}
    </>
  )
}

export default List
