import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'

function App() {
  return <p>Hello world</p>
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
