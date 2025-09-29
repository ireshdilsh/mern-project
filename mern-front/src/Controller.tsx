import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/dashboard' element = {<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
