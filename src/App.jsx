import { useState } from 'react'
import './App.css'

// Importamos los archivos react que contienen los codigos html

import MySelf from '../src/componentes/MySelf'
import Studies from '../src/componentes/Studies'
import Tools from '../src/componentes/Tools'
import MyDeports from '../src/componentes/MyDeports'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="app-container">
      <MySelf />
      <Studies />
      <Tools />
      <MyDeports />

      </div>
    </>
  )
}

export default App


