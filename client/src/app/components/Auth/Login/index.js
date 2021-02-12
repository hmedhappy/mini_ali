import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Link } from 'react-router-dom';

import { useState } from 'react';
import { SignIn } from "../../services";
import {Redirect } from "react-router-dom";




export default function Index() {

    const [errorLogin, seterrorLogin] = useState(false);
    const [errorPassword, seterrorPassword] = useState(false);
    const [authData, setauthData] = useState({login:"",password:""});
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = ( e ) => {
        e.preventDefault();
        SignIn.signIn(authData).then(data=>{
            data?.errorPassword ? seterrorPassword(true) :seterrorPassword(false);
            data?.errorLogin ? seterrorLogin(true) :seterrorLogin(false);
           if ( data?.auth ) {
            const {login , password} = data ;
             localStorage.setItem('user', JSON.stringify({login , password})); 
             setRedirect(true);
           }
        })
    }

    if (redirect === true ) return( <Redirect to="/users"/>)
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                  <TextField
                    error={errorLogin}
                    label="Username"
                    helperText="Incorrect entry."
                    variant="outlined"
                    name="login"
                    value={authData.login}
                    onChange={(e)=>{seterrorLogin(false);setauthData((old)=>({...old,...{login:e.target.value}}))}}
                    />
                    <TextField
                    error={errorPassword}
                    label="Password"
                    helperText="Incorrect entry."
                    variant="outlined"
                    name="password"
                    value={authData.password}
                    onChange={(e)=>{seterrorPassword(false);setauthData((old)=>({...old,...{password:e.target.value}}))}}

        />
                <input type="submit" value="Login"/>
            </form>
            <style jsx>{`
            
            form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 1px solid #191919;
                    padding: 35px;
                    border-radius: 10px;

            
            }
            `}
                
            </style>
        </div>
    )
}
