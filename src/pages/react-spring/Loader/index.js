import { animated, useSpring } from 'react-spring'

import car from './car.png'

const Loader = () => {
  const styles = useSpring({
    loop: true,
    to: [
      { transform: 'skew(0, 0)' },
      { transform: 'skew(0, 15deg)' },
      { transform: 'skew(0, -15deg)' },
      { transform: 'skew(0, 15deg)' },
    ],
    from: { transform: 'skew(0, 0)' },
  })

  return (
    <>
      <animated.img style={styles} src={car} alt="car" />
    </>
  )
}

export default Loader
