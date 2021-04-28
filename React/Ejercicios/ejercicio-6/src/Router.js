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
                <nav className="navbar px-5 py-3 bg-dark navbar-dark">
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" exact to="/">Ejercicio 1</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page2">Ejercicio 2</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page3">Ejercicio 3</NavLink>
                <NavLink activeClassName="activenavbar" className="navbar-brand greenhover" to="/Page4">Ejercicio 4</NavLink>
                </nav>
                <Switch>
                    <Route exact path="/" component={Page1} />
                    <Route path="/Page2" component={Page2} />
                    <Route path="/Page3" component={Page3} />
                    <Route path="/Page4" component={Page4} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
