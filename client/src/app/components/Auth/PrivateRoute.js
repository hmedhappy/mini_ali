import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";



const PrivateRoute = ({ component: Component, setauth,...rest }) => (
    // props means components passed down to this pricate route component
    <Route
        {...rest}
        render={(props) =>{
            if (isAuthenticated()) {
                return  <Component {...props} {...rest} />

            }else{
                setauth(true) ;
                return <Redirect
                to={{
                    pathname: "/signin",
                    state: { from: props.location }
                }}
            />
            }
            
        }
            
        }
    />
);

export default PrivateRoute;
