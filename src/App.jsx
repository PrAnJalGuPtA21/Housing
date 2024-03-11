import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./components/Home/Home"
import Feature from "./components/Features/Feature"
import Pricing from "./components/Pricing/Pricing"
import Pro from "./components/Pro"
import Advance from "./components/Advance"
import Signup from "./components/SignUp/Signup"
import SIgnIn from "./components/SignIn/SIgnIn"
import Free from "./components/Free"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/feature" element={<Feature/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/pro" element={<Pro/>}/>
        <Route path="/free" element={<Free/>}/>
        <Route path="/advance" element={<Advance/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<SIgnIn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
