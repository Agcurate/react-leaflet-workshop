import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react'
import L from 'leaflet'
import 'leaflet-markers-canvas/dist/leaflet-markers-canvas'

const Map = forwardRef(({ initialPosition }, ref) => {
  let canvasLayer

  useImperativeHandle(ref, () => ({
    createFlightMarkers: (flights) => {
      canvasLayer.clear()
      let markers = []

      for (var i = 0; i < flights.length; i++) {
        var icon = L.icon({
          iconUrl: "imgs/plane.png",
          iconSize: [20, 18],
          iconAnchor: [10, 10],
          rotationAngle: flights[i][10] ? flights[i][10] : 0
        });

        var marker = L.marker([flights[i][6], flights[i][5]], { icon })
          .bindPopup("I Am " + i)
          .on({
            mouseover(e) {
              this.openPopup();
            },
            mouseout(e) {
              this.closePopup();
            },
          });

        markers.push(marker);
      }

      canvasLayer.addMarkers(markers);
    }
  }))

  useEffect(() => {
    const map = L.map('map').setView(initialPosition.position, initialPosition.zoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    canvasLayer = new L.MarkersCanvas().addTo(map)
  }, [])

  return <div id="map"></div>
})

export default memo(Map)