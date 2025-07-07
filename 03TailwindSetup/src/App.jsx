import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen">
        <div className="bg-orange-400 h-50 text-center py-20">
          Orange
        </div>
        <div className="bg-white h-50 text-center py-20">
          White
        </div>
        <div className="bg-green-400 h-50 text-center py-20">
          Green
        </div>
      </div>
    </>
  )
}

export default App
