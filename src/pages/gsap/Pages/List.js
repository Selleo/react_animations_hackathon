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

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  return (
    <div className="bg-gray-800 mt-10" style={{ color: '#fff' }}>
      <ul>
        {list.map((item) => (
          <li style={{ margin: '10px 0' }} key={item.id}>
            <span
              onClick={() => {
                updateList(item.id, !item.show)
              }}
              style={{ cursor: 'pointer' }}
            >
              {item.name}
            </span>
            <button
              onClick={() => deleteItem(item.id)}
              style={{ color: 'red', marginLeft: '10px' }}
            >
              x
            </button>
            <div className={`show-${item.id}`}>
              {item.show && (
                <div>
                  {item.description}{' '}
                  <img
                    alt={item.description}
                    style={{ width: 300 }}
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
