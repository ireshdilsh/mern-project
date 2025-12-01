import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import HowItWorks from './pages/HowItWorks'

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/how/it/works' element={<HowItWorks/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
