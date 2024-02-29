import { Routes, Route } from 'react-router-dom'
import Navigations from './components/Navigations'
import { Books,  Account, Login, Register, SingleBook } from './components'
import './App.css'
import { useState } from 'react'
import bookLogo from './assets/books.png'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  console.log("Token:", token);
  return (
    <>
      <div>
        <Navigations token={token}/>
        <main>
        <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/account" element={<Account token={token} />} />
            <Route path="/login" element={<Login  setToken={setToken}/>} />
            <Route path="/register" element={<Register setToken={setToken}/>} />
            <Route path="books/:id" element={<SingleBook />} />
            <Route path="/singleBook" element={<SingleBook />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
