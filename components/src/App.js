 
import React from 'react';
import Contact from './pages/ContactUs';
// export default function App(){
// return (
//   <div>
//     <Contact/>
//   </div>
// )
// }

//comonetnt using class based 
class App extends React.Component{
  //here we are using mount life cycle of component 
  //first call construter then render and at last componentdidmount is done 
  //by this way mount life cycle of comonetnt is done 
 render(){
  console.log('this is render of Mount life cylcle');
  return <Contact/>
 }
 constructor(){
  //we have to call super for constructor
  super();
  console.log('constructor is called ');
 }
 componentDidMount(){
  console.log('componetnt is atached to our DOM')
 }


}
export default App;