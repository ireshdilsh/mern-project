import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import UserDashboard from './pages/UserDashboard.tsx';
import ArticlePage from './pages/ArticlePage.tsx';

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
          <Route path='/write/article' element={<ArticlePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
