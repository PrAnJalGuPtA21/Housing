import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home } from "@mui/icons-material"
import Feature from "./components/Features/Feature"
import Pricing from "./components/Pricing/Pricing"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home" element={<Feature/>}/>
        <Route path="/home" element={<Pricing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
