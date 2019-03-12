import ReactDOM from 'react-dom'
import React, { useRef, useEffect } from 'react'

import { draw } from './utils'
import { usePersistantState } from './hooks'
import './styles.css'

function App() {
  const [locations, setLocations] = usePersistantState([])
  const canvasRef = useRef(null)

  const width = window.innerWidth
  const height = window.innerHeight
  const style = { width, height }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, height, width)
    locations.forEach(location => draw(ctx, location))
  })

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
