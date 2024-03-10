import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home/Home"
import Feature from "./components/Features/Feature"
import Pricing from "./components/Pricing/Pricing"
import Pro from "./components/Pro"
import Advance from "./components/Advance"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="feature" element={<Feature/>}/>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="pro" element={<Pro/>}/>
        <Route path="advance" element={<Advance/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
