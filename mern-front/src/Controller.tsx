import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Features from './pages/Features'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import HowWorks from './pages/HowWorks'
import Dashboard from './pages/Dashboard'
import AlbumWithID from './pages/AlbumWithID'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Landing/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/pricing' element = {<Pricing/>}></Route>
          <Route path='/how/it/works' element = {<HowWorks/>}></Route>
          <Route path='/user/dashboard' element = {<Dashboard/>}></Route>
          <Route path='/album/:id' element = {<AlbumWithID/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
