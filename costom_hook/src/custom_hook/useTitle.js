import {useEffect} from 'react'
//this we are going to create our own hook which is very much handy for us
//this is like a function means that looks like component but here is only logical part so it like funtion 
const useTitle = (title) => {
    useEffect(() => {
        document.title=title;
    })
  return null;
}

export default useTitle
