import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import './Components/Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar bg-dark navbar-dark">
                <NavLink exact to="/Page1">Ejercicio 1</NavLink>
                <NavLink exact to="/Page2">Ejercicio 2</NavLink>
                <NavLink exact to="/Page3">Ejercicio 3</NavLink>
                <NavLink exact to="/Page4">Ejercicio 4</NavLink>
                </nav>
                <Switch>
                    <Route exact path="/Page1" component={Page1} />
                    <Route exact path="/Page2" component={Page2} />
                    <Route exact path="/Page3" component={Page3} />
                    <Route exact path="/Page4" component={Page4} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
