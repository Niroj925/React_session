
import {meroCss,headerCss,btn,simage} from "./jscss.js";
import image from './assets/image/tu.png';
import ('bootstrap/dist/css/bootstrap.css');
import('./assets/css/main.css');


function App() {
   var name=['thapakaji','sagar','kisne','basante'];
   var index=Math.floor( Math.random()*4);
     const func=()=>{
     console.log('hello my dear 🇳🇵');
   }
   const date=new Date().getDate();
  return (
    <div className="App">
     
      <header style={headerCss}>this us a header</header>
     <b>hello world today:{date}</b>
     <p style={{color:"green", fontSize:"15px",fontweight:"bold"}}>mero vai {name[index].toUpperCase()}</p>
     
     <p >{(()=>{
       //to print multiple lines we can do like this way
       //this immedialtely involking function expression(IIFE)
    console.log('hello thapa');
    console.log('congratulation');
    //here we make a arrow function and invoke here at the bottom () invoke this way
     })()}</p>
     <h4 style={meroCss} >hello this is from nodeIsTypedArray</h4>
     
     <p>{func()}</p>
     <button style={btn}>click me</button>
     <p>let practice some bootstrap now.</p>
      {/* use boothstrap here  */}
      <div>
        <img style={simage} src={image} alt="tu"/>
        <div>
       <button className="btn btn-primary" style={btn}>Login</button>
       </div>
      </div>
    </div>
  );
}

export default App;
