import React from "react";
import Input from "./Input";
function Login(props){
    return <form method="post" action={props.isRegister?"Register":"Login"} className="form">
    <Input type="text" placeholder="UserName"/>
    <Input type="password" placeholder="Password" />
    {props.isRegister ? null :<Input type="password" placeholder="Confim Password" />}
    <button type="submit">{props.isRegister?"Login":"Register"}</button>
    </form>
}
export default Login;