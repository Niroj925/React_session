
import {createGlobalStyle} from 'styled-components';

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Oxygen&family=Poppins:ital,wght@0,500;1,200;1,900&family=Ubuntu:wght@300&display=swap');
</style>
const GlobalStyle =createGlobalStyle`
*{
    margin:0px;
    padding:0px;
    font-family: 'Oxygen', sans-serif;
}
`;
//this above styled components is a global componets which is applied for all
 
export {GlobalStyle};