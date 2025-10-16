import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'


export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/create/account' element = {<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
