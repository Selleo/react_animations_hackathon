import { useState } from 'react'
import { config, useTransition } from 'react-spring'

import { GenerateElements } from './generateElements'
import { ListItem } from './ListItem'

export const List = () => {
  const [elements, setElements] = useState(GenerateElements)
  const removeElement = (idToRemove) => {
    setElements((currElements) => {
      return currElements.filter(({ id }) => id !== idToRemove)
    })
  }

  const transitions = useTransition(elements, {
    from: { progress: 1 },
    enter: { progress: 1 },
    leave: { progress: 0 },
    config: config.slow,
  })

  return (
    <div>
      {transitions(({ progress }, element) => (
        <ListItem
          key={element.id}
          element={element}
          transitionProgress={progress}
          removeElement={removeElement}
        />
      ))}
    </div>
  )
}
