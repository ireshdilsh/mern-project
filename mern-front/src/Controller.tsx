import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'


export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/create/account' element = {<Register/>}></Route>
                <Route path='/login/user/account' element = {<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
