import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css' 
import LandingPage from './pages/LandingPage'
import Landing from "./pages/Landing.tsx";

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
            <Route path='/home' element={<Landing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
