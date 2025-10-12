import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'
import Help from './pages/Help'
import TermsService from './pages/TermsService'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Write from './pages/Write'
import Notification from './pages/Notification'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/help-center' element= {<Help/>}></Route>'
                <Route path='/dashboard' element = {<Dashboard/>}></Route>
                <Route path='/terms-service' element = {<TermsService/>}></Route>
                <Route path='/privacy-policy' element = {<PrivacyPolicy/>}></Route>
                <Route path='/about-us' element = {<About/>}></Route>
                <Route path='/write' element = {<Write/>}></Route>
                <Route path='/notification' element = {<Notification/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
