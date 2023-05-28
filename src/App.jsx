import Welcome from './Components/Homepage/Welcome'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/Authentication/LoginPage'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}></Route>
      <Route path='/connect' element={<LoginPage/>}></Route>
    </Routes>
  )
}

export default App
