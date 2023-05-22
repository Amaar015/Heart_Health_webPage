import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/about/About';
import Blog from './components/Blog/Blog';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Header />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/blog' element={<Blog />} exact />
          <Route path='/team' element={<Team />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App