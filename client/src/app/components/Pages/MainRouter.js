import React, { useState , createContext } from 'react';
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

import '../../../style/Main.css'
import Shop from './views/Shop';
import {CartProvider} from './Contexts/CartContext'


export default function MainRouter() {
    const [auth, setauth] = useState(false);
    const [favourites, setfavourites] = useState([]);

    


    return (
        <div className="main">
                <CartProvider >
                <Header />
                    <div className="content">
                <Switch>

                    <Route exact path='/signin' component={Signin} />
                    <PrivateRoute setauth={setauth} exact path='/' component={Home} />
                    <PrivateRoute setauth={setauth} exact path='/users' component={AllUsers} />
                    <PrivateRoute  setauth={setauth} exact path='/posts' component={AllPosts} />
                    <PrivateRoute  setauth={setauth} exact path='/shop' component={Shop} />
                
                    <Route component={NotFound} />
                </Switch>
                    </div>
                </CartProvider>
                <Notification message={"You have to be Authentificated"} type={"error"} open={auth} setopen={setauth} />
                <Footer />




            </div>
    )
}
