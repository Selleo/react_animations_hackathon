import React from 'react'
import { Motion, spring } from 'react-motion'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGlobe,
} from 'react-simple-maps'

const mapStyles = {
  width: '90%',
  height: 'auto',
}

const Map = ({ center, zoom }) => (
  <div>
    <Motion
      defaultStyle={{
        x: center[0],
        y: center[1],
      }}
      style={{
        x: spring(center[0]),
        y: spring(center[1]),
      }}
    >
      {({ x, y }) => (
        <ComposableMap
          width={500}
          height={500}
          projection="orthographic"
          projectionConfig={{ scale: 220 }}
          style={mapStyles}
        >
          <ZoomableGlobe center={[x, y]} zoom={zoom}>
            <circle
              cx={250}
              cy={250}
              r={220}
              fill="transparent"
              stroke="#CFD8DC"
            />
            <Geographies
              disableOptimization
              geography="https://unpkg.com/world-atlas@1.1.4/world/110m.json"
            >
              {(geos, proj) =>
                geos.map((geo, i) => (
                  <Geography
                    key={geo.id + i}
                    geography={geo}
                    projection={proj}
                    style={{
                      default: { fill: '#CFD8DC' },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGlobe>
        </ComposableMap>
      )}
    </Motion>
  </div>
)

export default Map
