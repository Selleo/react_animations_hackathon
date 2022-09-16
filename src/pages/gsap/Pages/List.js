import gsap from 'gsap'
import { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'Mercury',
    description:
      '0.4 AU (60 million km; 37 million mi) from the Sun, is the closest planet to the Sun.',
    show: false,
  },
  {
    id: 2,
    name: 'Venus',
    description:
      '0.7 AU (100 million km; 65 million mi) from the Sun, is close in size to Earth (0.815 MEarth) and, like Earth',
    show: false,
  },
  {
    id: 3,
    name: 'Earth',
    description:
      '1 AU (150 million km; 93 million mi) from the Sun, is the largest and densest of the inner planets.',
    show: false,
  },
  {
    id: 4,
    name: 'Mars',
    description:
      '1.5 AU (220 million km; 140 million mi) from the Sun, is smaller than Earth and Venus (0.107 MEarth). ',
    show: false,
  },
]

const List = () => {
  const [list, setList] = useState(data)

  const updateList = (id, show) => {
    const newShow = list.map((item) => {
      if (item.id === id) return { ...item, show: show }

      return item
    })

    setList(newShow)

    let animate = gsap.fromTo(
      `.show-${id}`,
      { opacity: 0 },
      { opacity: 1, duration: 10, ease: 'elastic' }
    )
    animate.play()
  }

  const deleteItem = (e, id) => {
    e.stopPropagation()
    let animate = gsap.to(`#item-${id}`, { x: 1000, duration: 1, opacity: 0 })
    animate.play()

    setTimeout(() => {
      const newList = list.filter((item) => item.id !== id)

      setList(newList)
    }, 500)
  }

  return (
    <div className="mt-10 w-96 text-white">
      <ul>
        {list.map((item) => (
          <li
            id={`item-${item.id}`}
            className="w-full mt-6 cursor-pointer border-[1px] py-2 px-4 rounded-xl"
            key={item.id}
            onClick={() => {
              updateList(item.id, !item.show)
            }}
          >
            <div className="flex justify-between">
              <p className="uppercase">{item.name}</p>
              <button
                className="text-red-500 ml-3 text-base outline outline-1 py-0 px-2 rounded"
                onClick={(e) => deleteItem(e, item.id)}
              >
                X
              </button>
            </div>
            <div className={`show-${item.id}`}>
              {item.show && (
                <div className="mt-4">
                  {item.description}
                  <img
                    className="w-full"
                    alt={item.description}
                    src={`/planets/${item.name.toLowerCase()}.png`}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
