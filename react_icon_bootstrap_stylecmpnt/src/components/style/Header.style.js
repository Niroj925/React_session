import styled from 'styled-components';

//here we use some styled components which is hady in our react project 
//we can use css componetnt in a js manner through style components

//here it makes a styling structure for division tag
const Header=styled.div`
background-color:grey;
//for particular tag inside this component we can set css

h1{
color:green;
//for tag inside tag we can do like this
p{
    color:pink;
}
}

h1>

`;
export default Header;