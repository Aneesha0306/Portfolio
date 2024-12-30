import React from 'react'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import { Route,Routes } from 'react-router-dom'

function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default Routers
