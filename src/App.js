import React from 'react'

import { usePersistentCanvas } from './hooks'
import './styles.css'

function App() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas()

  function handleDraw(e) {
    setLocations([...locations, { x: e.clientX, y: e.clientY }])
  }

  function handleClear() {
    setLocations([])
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1))
  }

  return (
    <>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleUndo}>Undo</button>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={handleDraw}
      />
    </>
  )
}

export default App
