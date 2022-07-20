import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [title, setTitle] = useState("React + Vite + TailwindCSS Boilerplate")

  return (
    <div>
      <p className='underline'>{title}</p>
    </div>
  )
}

export default App
