import React from 'react'
import { spring } from 'react-motion'
import { Motion } from 'react-motion/lib/react-motion'

import Map from './Map'

const Maps = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Motion
        defaultStyle={{ x: -360, y: -720, zoom: -1 }}
        style={{
          x: spring(49.822, { stiffness: 1, damping: 1, precision: 5 }),
          y: spring(19.04686, { stiffness: 5, damping: 5, precision: 5 }),
          // zoom: spring(2.5, { stiffness: 1, damping: 1 }),
        }}
      >
        {(value) => <Map center={[value.y, value.x]} zoom={value.zoom} />}
      </Motion>
    </div>
  )
}

export default Maps
