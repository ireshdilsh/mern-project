import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Write from './pages/Write'
import Notification from './pages/Notification'
import ArtcileByID from './pages/ArtcileByID'
import MyArticles from "./pages/MyArticles.tsx";
import About from "./pages/About.tsx";
import Resources from "./pages/Resources.tsx";
import Community from "./pages/Community.tsx";


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
                <Route path='/my/articles' element={<MyArticles/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/community' element={<Community/>}></Route>
                <Route path='/resources' element={<Resources/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
