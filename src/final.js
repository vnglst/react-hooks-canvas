import ReactDOM from 'react-dom'
import React from 'react'

import { usePersistentCanvas } from './hooks'
import './styles.css'

function App() {
  const [locations, setLocations, canvasRef] = usePersistentCanvas()

  const width = window.innerWidth
  const height = window.innerHeight
  const style = { width, height }

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
        width={width}
        height={height}
        style={style}
        onClick={handleDraw}
      />
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
