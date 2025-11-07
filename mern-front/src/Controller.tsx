import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'


export default function Controller() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<Landing/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

// https://uncutjalwa.online/tu-haan-kar-ya-naa-kar-e02-2025-hind-hot-web-series-ullu/