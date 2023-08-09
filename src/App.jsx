import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowPokemons from './features/pokemon/showPokemons'
import Colors from './features/Color/Colors'
import { Route,Routes } from 'react-router-dom'
import Menu from './Components/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='d-flex'>
<Menu/>
    <Routes>
<Route path='/pokemons' element={<ShowPokemons/>}/>
<Route path='/colors' element={<Colors/>}/>
  

</Routes>

    </div>
  )
}

export default App
