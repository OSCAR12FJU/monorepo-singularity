import { Route, Routes } from "react-router-dom"
import { Layout } from "./components/app/Layout"
import { LoginSesion } from "./components/sections/LoginSesion"
import { PrivateRoute } from "./components/PrivateRoute"

function App() {

  return (
    <>
    <Routes>
      <Route index path="/" element={<LoginSesion />}/>
      <Route path="/login" element={<LoginSesion />}/>

      <Route element={<PrivateRoute />} >
        <Route path="/inicio" element={<Layout />}/>
      </Route>

    </Routes>
    {/* <Layout /> */}
    </>
  )
}

export default App
