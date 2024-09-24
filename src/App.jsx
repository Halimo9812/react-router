
import{ Route, Routes} from 'react-router-dom' 
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<HomePage/>}/>
      <Route path = "/About" element = {<AboutPage/>}/>
      <Route path = "/Profile/ :id" element = {<ProfilePage/>}/>
      </Routes>
    </>
  )
}

export default App
