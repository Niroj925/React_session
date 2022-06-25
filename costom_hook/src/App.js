
//here we implement custom hook which is our own created desired hook
import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Homepage from"./page/Homepage";
import ContactUs from './page/ContactUs';
import AboutUs from './page/AboutUs';
import "./assets/css/App.css";//add css for navbar
import Detail from "./page/Detail.d_page";
import News from"./page/News.d_page";
import PageNotFound from"./page/PageNotFound";



//in this session we practice about Routing 
//we use react-router-DOM package for routing

//react-router-dom  components: BrowserRouter,Router,Routes,Link
const App = () => {
  return (
    <div>
      
        {/* formate of routing  */}
        <Router>
              {/* let's make a navbar */}
              {/* if we use Link that must be inside Router */}
              {/* this navbar is fixed for all route becsuse it is above route so fixed for all pages */}
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
            <Routes>
            <Route path="/" element={<Homepage/>}/>
                <Route path="contact" element={<ContactUs/>}/>
                <Route path="about" element={<AboutUs/>}/>

                {/* this is parent route */}
                <Route path="book">
                    {/* this is main file parent file */}
                     <Route index element={<b>Books</b>}/>
                    {/* these are child routes  we can nested many routes inside and inside*/}
                     <Route path='buy' element={<b>you can buy books</b>}/> 
                     <Route path='sell' element={<b>books are sold</b>}/> 
                </Route>

                {/* let's make a dynamic routing  */}
                <Route path="profile">
                    <Route index element={<>this is my profile page</>}/>
                    {/* this is for dynamic routing */}
                    <Route path=":id" element={<Detail/>}/>
                    <Route path=":id/:title" element={<News/>}/>
                </Route>
              
                {/* if enter url not found then show that message */}
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
            <snap>
                Copyright@2022,NeoTech
            </snap>
        </Router>
    </div>
  )
}

export default App