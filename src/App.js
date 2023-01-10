import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let color = new Values(color).all(10)
      setList(colors)
    } catch (error){
      setError(true)
      console.log(error)
    }
  }


  return <h2>color generator project</h2>
}

export default App
