import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css' 
import LandingPage from './pages/LandingPage'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
