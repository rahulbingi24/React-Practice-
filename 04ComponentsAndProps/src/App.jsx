import { useState } from 'react'
import Card from './components/Card'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='m-0.5 flex'>
      <Card id="878" price="100" desc="Cool Monkey Dude"/>
      <Card id="420" price="200" desc="Angry Monkey Dude"/>
      <Card id="300" price="99" desc="Ape Monkey Dude"/>
    </div>
  )
}

export default App
