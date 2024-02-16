import { Routes, Route } from 'react-router-dom'
import Navigations from './components/Navigations'
import { Books,  Account, Login, Register, SingleBook } from './components'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Navigations />
        <main>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singleBook" element={<SingleBook />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
