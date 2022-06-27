import React from 'react'
import AddconfessionPost from '../components/AddconfessionPost';
import ConfessionList from '../components/ConfessionList';
import useTitle from "../hook/useTitle";

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
