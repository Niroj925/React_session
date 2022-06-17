import {object, string} from "yup";

 //let's define validation schema 
 const userLoginSchema =object({ 
    name: string().required(),
    email: string().email('valid email dinuhos').required('email chaiyo yrr'),// we can give our own custom message
    password: string().min(7,"character 7 vanda dherai hunuparxa").max(15).required(),
    address: string().min(5),
});

export default userLoginSchema;