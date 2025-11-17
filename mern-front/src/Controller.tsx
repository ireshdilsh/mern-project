import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Dashboard'
import Upload from './pages/dashboard/Upload'
import Albums from './pages/dashboard/Albums'
import Stories from './pages/dashboard/Stories'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/upload' element={<Upload />} />
                <Route path='/albums' element={<Albums />} />
                <Route path='/stories' element={<Stories />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}