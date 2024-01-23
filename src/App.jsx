import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import toast, { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(1) // Change the variable name to setCount
  const countHandler = () => {
    setCount((prevCountVal) => prevCountVal + 1) // Use setCount to update the state
  }

  useEffect(() => {
    if (count === 5) {
      toast.success('Click more 5 times')
    } else if (count === 10) {
      toast.success('You are an idiot 😆')
    }
  }, [count])

  return (
    <>
      <Toaster />
      <div className="mb-[10rem]">
        <Nav />
      </div>
      <div className="m-auto w-1/2 flex justify-center">
        <button
          className="bg-transparent hover:bg-slate-300 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded shadow-xl"
          onClick={countHandler}
        >
          Button Count = {count}
        </button>
      </div>
    </>
  )
}

export default App
