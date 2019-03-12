import { useState, useEffect } from 'react'

export function usePersistantState(init) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  )

  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(value))
  })

  return [value, setValue]
}
