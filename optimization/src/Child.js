import React,{memo} from 'react'
//in case of component to memoize we have a 'memo' higher order function 

const Child = () => {
    console.log('hello from child component ')
  return (
    <div>
      
    </div>
  )
}
//here we have memoized this component
export default memo(Child);
