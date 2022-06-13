import React,{useState} from 'react';
import {Form ,Container,Button,Alert,Row,Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import{FaPlus,FaTrash} from 'react-icons/fa';

const TodoList = () => {
//in our to do list data are in the array form
//set the data in todo formate

//to data from store data from local storages
//and intially splite and pass them
   const intialData=JSON.parse(localStorage.getItem('todos'))
    const [toDolist,setToDolist]=useState([...intialData]);//... mean split data
    const[text,setText] = useState('');

    //make a function
    const addTodo= () => {
       
      const toDo= [
         //to store old data by splititng and kept new also we can do
        ...toDolist,//this is to store old data
        //this is for new data
              {
                data:text,
                date:new Date().toLocaleString().split(' ')[0],//it show only date by spliting
                isComplete:false
            }
       ]
       //after setting the value textfiled   to make textfield empty set empty
       setText('');
       setToDolist(toDo);
       //to store in a local storage we use a local
       localStorage.setItem("todos",JSON.stringify(toDo));
    }
//functions 
const toggleTodoComplete = (idx) => {
const newTodo= toDolist.map((todo,index)=>
 (index===idx)?{  ...todo,isComplete:!todo.isComplete}:todo);
//3 . mean split data ie todolist data
  //we just change the value of completed and remain are send same
   

//set newtodo  and  send to the list with changing the value of the isComplete
setToDolist(newTodo);
localStorage.setItem("todos",JSON.stringify(newTodo));
   
}

const deletTodo=(idx)=>{
    //thsis is a confirmation msg bar
    const response=window.confirm('Do you want to delete this list');
if(response){
    //this will filter all the datas through loop
const newTodo= toDolist.filter((todo,index)=>//for we can remove { }, ; and return
    (index===idx)?false:true
)
setToDolist(newTodo);
localStorage.setItem("todos",JSON.stringify(newTodo));
   
}
}
//formated

// [
//     {
//         data:"todo",
//         data:'current date',
//         iscompleted:'true/false'

//     }
// ]

  return (
    <Container className="mt-3 text-center">

        <h3>To DoList</h3>
        <Form.Control 
        type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)} 
        //if enter press then add we have to do 
        onKeyPress={(e)=>(e.key==='Enter')&&addTodo()}//we can use ternary operator also
        
        />
          
        {/* this is same as above */}
        {/* <input type="text" className="form-control"/> */}
       <br/>
        <Button onClick={addTodo}>
            {/* this is for icons */}
            <FaPlus/>
            {/* lebel ms means space between icons and btn text */}
            <lebel className="ms-2">Add</lebel></Button>
           <br/>
           <br/>
            {/* to display the added data we have to do map */}
            {toDolist.length>0? toDolist.map((todo,index)=>{
                //we can take a unique index of the data
                // text-start is position where to kept center left or right
              return(
                <Row>
                <Col xs={10}>
                <Alert
              //variant properties if true color change else remain same
                variant={todo.isComplete?"danger":"primary"}//danger mean color is chage into red
               className='text-start'
               //to cut text by line we have to change style decoration
               style={
                {
                    cursor: 'pointer',
                   textDecoration:todo.isComplete?"line-through":"none"
                }
               }
               //without arrow function it execute without click so kept in a function
               onClick={()=>toggleTodoComplete(index)}//index is get from maping
               >
                <h3>{todo.data}</h3>
              <small>{todo.date}</small>
              </Alert>
               </Col>
               <Col className="mt-4">
                {/* mt-3 mean margin from top */}
                 <FaTrash
                  size="35"
                   color="red" 
                   onClick={()=>deletTodo(index)}//arrow function is for render after click
                   >
                   </FaTrash>
               </Col>
              </Row>
              )
            }):"no to do"
            }
    </Container>
  )
}

export default TodoList