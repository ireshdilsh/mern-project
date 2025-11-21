import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}