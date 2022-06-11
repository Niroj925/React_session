//we talked about the webpack which means comibining all the static file (html css etc )in one file
//by the system 
//lint is a small tool which is used to check our code is in js formate or not
//to check  out formate and correct them in the form of js so lints 
//for fast coding and to fix small bug we have to use lint
//it helps to make our code in standard formate of js

function App() {
    document.title='homepage';
    console.log(window.location);
   function msg(){
       alert('hello nepal');
   }
    
     const ok=window.confirm('do you want to continue');
     ok?console.log('true'):console.log('false');
    const name='niroj';
      function alrt(e){alert(`Form is Submitted   `)
      e.preventDefault();
      console.log(e);
    };
  
    return (
        <div>
            {msg()}
            <div > hello Mero Nepal {name} </div>  
             {/*here we should not give this () parenthesis   */}
             <form onSubmit={alrt}>
                 <input type="text" ></input>
             </form>
        <button onClick={()=>{alrt(2)}}>Click</button> 
        </div> 
    );
}

export default App;