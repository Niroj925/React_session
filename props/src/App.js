import Greet from"./Greet"
import Header from './Header'

const COMP=()=>{
    return(
        <div>
            {/* in react if we pass data in components that are called props 
            //here Greet is a component and name is a props*/}
            {/* <Greet name='Thapakaji' age='22'/> */}
            {/* we can pass object in a components as a props 
            //for that we have to use {{}} single bracket stand for js and double for object 
            */}
            <Greet name='kaji' age='22' hobbies={{indoor:'codding', outdoor:'football'}}/>
               
            {/* call header componetnt
            //here is a demo of pop driling but is has a great demerits of usig unnecessary components to send msgs inside components
            //to overome this problem we use useContext hook and Redux library which is very crucial for that        */}
            <Header msg="hello from header props drilling demo">
                 hello this is children of this componetnt
            </Header>
             </div>  )
    }

export default  COMP;    