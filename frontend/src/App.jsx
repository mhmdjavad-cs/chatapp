import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home'
import Test from './pages/test'


function App() {

  return <>

    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>

        <Route path='/test' element={<Test/>}></Route>

      </Routes>
    
    
    </BrowserRouter>
  
  </> 
}

export default App
