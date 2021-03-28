import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './App.css';

import Map from './Map'

function App() {
  const [position, setPosition] = useState({ position: [39.93290692296977, 32.825775146484375], zoom: 8 })
  const [flights, setFlights] = useState([])

  const mapController = useRef()

  useEffect(() => {
    function getFlights() {
      fetch("https://opensky-network.org/api/states/all")
        .then(response => response.json())
        .then(data => {
          const filtered = data.states.filter(flight => flight[5] !== null && flight[6] !== null)
          setFlights(filtered)
        })
    }
    getFlights()
    setInterval(() => {
      getFlights()
    }, 20000)
  }, [])

  useEffect(() => {
    if (flights.length) {
      mapController.current.createFlightMarkers(flights)
    }
  }, [flights])

  return (
    <div className="App">
      <Map
        ref={mapController}
        initialPosition={position} />
    </div>
  );
}

export default App;
