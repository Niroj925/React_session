import styled from 'styled-components';
//we are making compopnent of css like others files to use in our project 
const MeroButton =styled.button`
// we are passing props in componets so to recieve that we have to make a function
//this is from themprovider which define in App component

 background-color:${(props)=>props.theme.colors.primaryColor||'grey'};

 //we can make this conditionning like js it's amazing
 
 color:${(color)=>color||'black'};//by destructuring
padding:10px;
border-radius:9px;

//for seudo class we can use like this way 
&:hover{
    background-color:purple;
}
`;
//in case of multiple export we can not make default export
export  { MeroButton};
