import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound'
import MainRouter from './components/Pages/MainRouter'
import '../style/App.css';



export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={MainRouter} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
    </div>
    )
}
