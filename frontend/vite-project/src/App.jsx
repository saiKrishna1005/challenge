import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';
import {Routes, Route} from "react-router-dom"
import Home from './Home'




function App() {

  return (
    <>
      <Navbarr/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App
