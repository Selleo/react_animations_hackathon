import { useCallback, useRef } from 'react'
import { animated, useSpring } from 'react-spring'

export const ListItem = ({ car }) => {
  const [styles, api] = useSpring(() => ({
    immediate: true,
    from: { width: '300px', height: '87px' },
  }))
  const isOpen = useRef(false)

  const click = useCallback(() => {
    const order = isOpen.current
      ? {
          from: { width: '1216px', height: '538px' },
          to: { width: '300px', height: '87px' },
        }
      : {
          from: { width: '300px', height: '87px' },
          to: { width: '1216px', height: '538px' },
        }
    api.start(() => ({
      ...order,
      immediate: false,
    }))
    isOpen.current = !isOpen.current
  }, [api])

  return (
    <animated.div
      onClick={click}
      className="bg-white shadow overflow-hidden sm:rounded-lg mb-4"
      style={styles}
    >
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {car.name}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{car.short}</p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <div>
              <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">
                    Top&nbsp;speed
                  </dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      ${car.topSpeed}
                    </div>
                  </dd>
                </div>
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-base font-normal text-gray-900">Price</dt>
                  <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                      ${car.price}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <img
              src={car.url}
              alt={car.name}
              style={{ width: '716px', height: '240px' }}
            />
          </div>
        </dl>
      </div>
    </animated.div>
  )
}
