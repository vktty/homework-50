
import './App.css'
import { UseCallback } from './components/UseCallback'
import { UseMemo } from './components/useMemo'

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
