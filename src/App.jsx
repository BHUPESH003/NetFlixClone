import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import   './App.scss'

function App() {

  return (
  <div>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </div>
      
  )
}

export default App
