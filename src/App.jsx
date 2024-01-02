import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header/>
      <div className='flex items-center gap-4'>
      <button onClick={() => setCount((count) => count + 1)}>
        Points to Adarsh :
      </button>
      <div>
        {count}
        </div>
      </div>
      <div className="text-bold underline my-2">
        Using Tailwind CSS
      </div>
    </div>
  )
}

export default App
