import { BrowserRouter, Route, Routes } from 'react-router-dom'


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
