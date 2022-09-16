import { useEffect, useState } from 'react'
import { animated, to, useSpring } from 'react-spring'

import { CarItem } from './CarItem'

const height = { small: 87, big: 538 }
const width = { small: '300px', big: '1216px' }

export const ListItem = ({
  element: car,
  removeElement: removeCar,
  transitionProgress,
}) => {
  const [isOpen, setIsOpen] = useState(null)
  const toggleOpen = () => {
    setIsOpen((v) => !v)
  }

  const handleDelete = () => removeCar(car.id)

  const [openStyles, openApi] = useSpring(() => ({
    from: { width: isOpen === null ? width.small : width.big },
    to: { width: width.small },
    reset: true,
    reverse: isOpen,
  }))

  const [heightStyles, heightApi] = useSpring(() => ({
    from: { height: isOpen ? height.big : height.small },
  }))

  useEffect(() => {
    if (isOpen === null) return

    heightApi.start(() => ({
      to: { height: isOpen ? height.big : height.small },
    }))
    openApi.start(() => ({
      to: { width: isOpen ? width.big : width.small },
    }))
  }, [heightApi, isOpen, openApi])

  return (
    <animated.div
      className="bg-white shadow overflow-hidden sm:rounded-lg mb-4"
      style={{
        ...openStyles,
        marginBottom: transitionProgress.to((val) => `${val}rem`),
        transform: transitionProgress.to((val) => `scale(${val}, 1)`),
        height: to(
          [transitionProgress, heightStyles.height],
          (prog, height) => `${prog * height}px`
        ),
        transformOrigin: 'left',
      }}
    >
      <CarItem car={car} toggleOpen={toggleOpen} handleDelete={handleDelete} />
    </animated.div>
  )
}
