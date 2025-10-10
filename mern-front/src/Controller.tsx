import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Help from './pages/Help'
import TermsService from './pages/TermsService'
import About from './pages/About'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/help-center' element= {<Help/>}></Route>'
                <Route path='/dashboard' element = {<Dashboard/>}></Route>
                <Route path='/terms-service' element = {<TermsService/>}></Route>
                <Route path='/about-us' element = {<About/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
