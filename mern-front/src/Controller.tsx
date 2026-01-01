import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.tsx";
import UserDashboard from './pages/UserDashboard.tsx';
import ArticlePage from './pages/ArticlePage.tsx';
import ArticleById from "./pages/ArticleByID.tsx";
import Notification from './pages/Notification.tsx';
import MyArticles from './pages/MyArticles.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

export default function Controller() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/dashboard' element={<ProtectedRoute><UserDashboard /></ProtectedRoute>}></Route>
          <Route path='/write/article' element={<ProtectedRoute><ArticlePage /></ProtectedRoute>}></Route>
          <Route path='/get/article/by/:id' element={<ProtectedRoute><ArticleById /></ProtectedRoute>}></Route>
          <Route path='/user/notifications' element={<ProtectedRoute><Notification /></ProtectedRoute>}></Route>
          <Route path='/my/articles/:email' element={<ProtectedRoute><MyArticles /></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
