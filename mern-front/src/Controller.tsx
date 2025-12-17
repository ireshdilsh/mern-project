import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import UserDashboard from './pages/UserDashboard.tsx';
import ArticlePage from './pages/ArticlePage.tsx';
import ArticleById from "./pages/ArticleByID.tsx";
import Notification from './pages/Notification.tsx';

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
          <Route path='/write/article' element={<ArticlePage/>}></Route>
            <Route path='/get/article/by/:id' element={<ArticleById/>}></Route>
            <Route path='/user/notifications' element={<Notification/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
