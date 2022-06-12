import React from 'react';
import {FaTrash ,FaPlus} from'react-icons/fa';
import {Button,Alert} from 'react-bootstrap';
// to use css we have to import bootstrap from module
import 'bootstrap/dist/css/bootstrap.css';
import Header from'./components/style/Header.style.js';
import {MeroButton } from'./components/style/Button.style.js';
import Container from'./components/style/Container.style.js';
import {GlobalStyle} from'./components/style/Global.style.js';
import { ThemeProvider } from 'styled-components';
import MeroTheme from'./Theme';

const App = () => {
  
  return (
    <div>
    <Container>
        <Header>
         <FaTrash size='75' color='green' title="Dustbin"/>
         {/* this button is from bootstrap and use props instead of className=btn btn-*/}
         <Button variant='primary' href='https://www.google.com'>Add <FaPlus color='red' title='add'/></Button>
        {/* for danger varient color is in red */}
         <Alert variant='danger'>Some info</Alert>
        <h1 > mero nepal 
          <p>
            wow amazing use of style components here
            </p>

            </h1>
         
         </Header>
    </Container>
    <div>
      {/* to use properties of style component we use from themprovide
    for entire which are inside themeprovider which are defined in themeprovide  */}
     <ThemeProvider theme={MeroTheme}>
          {/* button style componetnt */}
          <MeroButton color='white'  >Click Me</MeroButton>
          {/* without using themeProvider */}
          {/* <MeroButton color='red' bgc='green'>Submit</MeroButton> */}

           {/* for background color provided from themeprovider */}
          <MeroButton color='red'>Submit</MeroButton> 
          {/* for same type of structure we do not make  many components we just change their 
          properties by passing props in componrnts */}
          {/* <MyButton>Submit</MyButton> */}

       
                  {/* this is a global style which is applied for all components */}
        <GlobalStyle></GlobalStyle>
        </ThemeProvider>
    </div>
   </div>
  )
}

export default App