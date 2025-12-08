import './App.css'
import { HomeForm, RegisterForm } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeForm/>}/>
        <Route path='/register' element={<RegisterForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
