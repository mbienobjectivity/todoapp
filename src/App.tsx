import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="rounded-md bg-yellow-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-yellow-800">Attention needed</h3>
        <div className="mt-2 text-sm text-yellow-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo
            totam eius aperiam dolorum.
          </p>
        </div>
      </div>
    </div>
  </div>
    // <h1 className='text-3xl font-bold underline'>
    //   Hello world with tailwind.
    // </h1>
    // <div className="App">

    // </div>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
  )
}

export default App
