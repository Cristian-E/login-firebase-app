import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Home from "./components/Home"
import { AuthProvider } from "./context/autoContext"



function App() {

  return (
    <div className="text-white h-[100vh] bg-cover bg-center flex justify-center items-center bg-cover" >

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Register />} />
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App
