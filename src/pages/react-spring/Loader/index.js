import { animated, useSpring } from 'react-spring'

import car from './car.png'
import flag from './flag.png'

const Loader = () => {
  const styles = useSpring({
    loop: true,
    to: [{ left: '80%' }],
    from: {
      position: 'absolute',
      left: '0%',
      top: '29%',
      zIndex: 9999,
    },
    config: { mass: 3, tension: 40, friction: 20, clamp: true },
  })

  const stylesFlag1 = useSpring({
    loop: true,
    to: [{ top: '52%' }, { top: '48%' }, { top: '50%' }],
    from: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      width: 100,
      height: 100,
    },
    config: { mass: 3, tension: 300, friction: 20, clamp: true },
  })

  const stylesFlag2 = useSpring({
    loop: true,
    to: [{ top: '22%' }, { top: '18%' }, { top: '20%' }],
    from: {
      width: 100,
      height: 100,
      position: 'fixed',
      top: '20%',
      left: '50%',
    },
    config: { mass: 3, tension: 300, friction: 20, clamp: true },
  })

  const stylesTyre1 = useSpring({
    loop: true,
    to: [{ right: '19%', left: '15%' }],
    from: {
      height: 12,
      backgroundColor: '#000000',
      position: 'fixed',
      left: '0%',
      right: '100%',
      top: '37%',
      opacity: 0.4,
    },
    config: { mass: 3, tension: 40, friction: 20, clamp: true },
  })

  const stylesTyre2 = useSpring({
    loop: true,
    to: [{ right: '19%', left: '15%' }],
    from: {
      height: 12,
      backgroundColor: '#000000',
      position: 'fixed',
      left: '0%',
      right: '100%',
      top: '43%',
      opacity: 0.4,
    },
    config: { mass: 3, tension: 40, friction: 20, clamp: true },
  })
  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: '64px',
          bottom: 0,
          backgroundColor: 'white',
        }}
      >
        <animated.img style={styles} src={car} alt="car" />
        <animated.img style={stylesFlag1} src={flag} alt="flag" />
        <animated.img style={stylesFlag2} src={flag} alt="flag" />
        <animated.div style={stylesTyre1} />
        <animated.div style={stylesTyre2} />
      </div>
    </>
  )
}

export default Loader
