
import React ,{useEffect,useLayoutEffect} from 'react'

const App2 = () => {
    useEffect(() =>{
        console.log('useEffect hook');

    })

    useLayoutEffect(() =>{
        console.log('useLayoutEffect hook');
    })
  return (
    <div>App2</div>
  )
}

export default App2