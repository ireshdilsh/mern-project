import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css' 
import Landing from "./pages/Landing.tsx";
import LegalPage from './pages/LegalPage.tsx';
import ContatctPage from './pages/ContatctPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import Dashboard from './pages/Dashboard.tsx';

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<LandingPage/>}></Route> */}
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/legal/and/licensing' element = {<LegalPage/>}></Route>
            <Route path='/contact' element = {<ContatctPage/>}></Route>
            <Route path='/about' element = {<AboutPage/>}></Route>
            <Route path = '/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
