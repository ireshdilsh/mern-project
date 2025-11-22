import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import Press from './pages/Press'

export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/press' element={<Press />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}