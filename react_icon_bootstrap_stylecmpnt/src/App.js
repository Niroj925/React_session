import React from 'react';
import {FaTrash ,FaPlus} from'react-icons/fa';
import {Button,Alert} from 'react-bootstrap';
// to use css we have to import bootstrap from module
import 'bootstrap/dist/css/bootstrap.css';
import Header from'./components/style/Header.style.js';
import {MeroButton } from'./components/style/Button.style.js';
import Container from'./components/style/Container.style.js';

const App = () => {
  return (
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
             {/* button style componetnt */}
          <MeroButton color='white' bgc='blue' >Click Me</MeroButton>
          <MeroButton color='red' bgc='green'>Submit</MeroButton>
          {/* for same type of structure we do not make  many components we just change their 
          properties by passing props in componrnts */}
          {/* <MyButton>Submit</MyButton> */}
         </Header>
    </Container>
   
  )
}

export default App