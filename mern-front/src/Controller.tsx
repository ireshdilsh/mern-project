import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css' 
import Landing from "./pages/Landing.tsx";
import LegalPage from './pages/LegalPage.tsx';

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<LandingPage/>}></Route> */}
            <Route path='/' element={<Landing/>}></Route>
            <Route path='/legal/and/licensing' element = {<LegalPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
