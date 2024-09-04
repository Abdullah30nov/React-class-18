import SignUp from './Screens/Signup/Signup'
import Login from './Screens/Login/Login'
import Signup from './Screens/Signup/Signup'
import { Route, Routes } from 'react-router-dom'
import Home from './Screens/Home/Home'
function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
    </>
  )
}

export default App
