import { UseCallback } from './components/UseCallbackComponent'
import { UseMemo } from './components/UseMemoComponent'

import './App.css'

function App() {

  return (
    <>
      <div className='container'>
        <UseMemo />
        <UseCallback />
      </div>
    </>
  )
}

export default App
