import React from 'react'
import AddconfessionPost from '../components/AddconfessionPost';
import ConfessionList from '../components/ConfessionList';
import useTitle from "../hook/useTitle";
import "../assets/css/Homepage.css";

const Homepage = () => {
    useTitle('Homepage || confess note')
  return (
    <div>
       <AddconfessionPost/>
      <ConfessionList/>
    </div>
  )
}

export default Homepage
