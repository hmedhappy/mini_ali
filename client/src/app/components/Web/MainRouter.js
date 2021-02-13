import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import AllUsers from './views/AllUsers';
import AllPosts from './views/AllPosts';

import Home from './views/Home';
import Header from '../Header';
import Footer from '../Footer';
import PrivateRoute from '../Auth/PrivateRoute';

import Notification from '../Notification'
import NotFound from '../NotFound'

import Signin from '../Auth/Login'


export default function MainRouter() {
    const [auth, setauth] = useState(false);
    return (
        <div className="main">
                <Header />
                    <div className="content">
                <Switch>

                    <Route exact path='/signin' component={Signin} />
                    <PrivateRoute setauth={setauth} exact path='/' component={Home} />
                    <PrivateRoute setauth={setauth} exact path='/users' component={AllUsers} />
                    <PrivateRoute  setauth={setauth} exact path='/posts' component={AllPosts} />
                
                    <Route component={NotFound} />
                </Switch>
                    </div>
                <Notification message={"You have to be Authentificated"} type={"error"} open={auth} setopen={setauth} />
                <Footer />


                <style jsx>{`
                .main{
                    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
                }
                    .content{
                        flex:1 ;
                        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
                    }
                
                    
                `}</style>

            </div>
    )
}
