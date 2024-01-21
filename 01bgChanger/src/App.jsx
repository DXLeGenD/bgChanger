import { useState } from 'react'
import "./App.css"

function App() {
  const [color, setColor] = useState("red")

  return (
    <div className='w-full h-screen duration-300'
      style={{ backgroundColor: color }}>
      <div className='flex w-full fixed flex-wrap justify-center px-3 py-2  bottom-3'>
        <div className='flex justify-center flex-wrap px-3 py-2 rounded-xl gap-3 bg-white'>
          <button onClick={() => setColor("red")} className='bg-red-600 text-white px-3 py-2 rounded-xl shadow-lg'>Red</button>
          <button onClick={() => setColor("green")} className='bg-green-600 text-white px-3 py-2 rounded-xl shadow-lg'>Green</button>
          <button onClick={() => setColor("blue")} className='bg-blue-600 text-white px-3 py-2 rounded-xl shadow-lg'>Blue</button>
          <button onClick={() => setColor("olive")} className='olive text-white px-3 py-2 rounded-xl shadow-lg'>Olive</button>
          <button onClick={() => setColor("gray")} className='bg-neutral-500 text-white px-3 py-2 rounded-xl shadow-lg'>Gray</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-300 text-white px-3 py-2 rounded-xl shadow-lg'>Yellow</button>
          <button onClick={() => setColor("pink")} className='bg-rose-300 text-white px-3 py-2 rounded-xl shadow-lg'>Pink</button>
          <button onClick={() => setColor("purple")} className='bg-fuchsia-600 text-white px-3 py-2 rounded-xl shadow-lg'>Purple</button>
          <button onClick={() => setColor("indigo")} className='bg-violet-700 text-white px-3 py-2 rounded-xl shadow-lg'>Violet</button>
          <button onClick={() => setColor("white")} className='bg-blue-100 text-black px-3 py-2 rounded-xl shadow-lg'>White</button>
          <button onClick={() => setColor("black")} className='bg-black text-white px-3 py-2 rounded-xl shadow-lg'>Black</button>


        </div>
      </div>


    </div>
  )
}

export default App
