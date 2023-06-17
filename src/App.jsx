// import Welcome from './Components/Homepage/Welcome'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import Welcome from './Components/Homepage/Welcome'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default App
