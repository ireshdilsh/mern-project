import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'
import Notification from './pages/Notification'
import ArtcileByID from './pages/ArtcileByID'


export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
                <Route path='/create/account' element = {<Register/>}></Route>
                <Route path='/login/user/account' element = {<Login/>}></Route>
                <Route path='/dashboard' element = {<Dashboard/>}></Route>
                <Route path='/write/page' element = {<Write/>}></Route>
                <Route path='/notification/page' element = {<Notification/>}></Route>
                <Route path='/view/article/:id/:title' element = {<ArtcileByID/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
