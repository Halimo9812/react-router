
import { useState } from 'react'
import{ Route, Routes} from 'react-router-dom' 
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Navbar from './components/Navbar.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import './App.css';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/about" element = {<AboutPage/>}/>
      <Route path = "/profile/ :id" element = {<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
