import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Fotter';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Aboutus from './pages/Aboutus';

const App = () => {
  return (
   
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
