import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from './pages/Error';

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <NavLink style={{marginRight: "10px"}} to="/" activeClassName="active">Inicio</NavLink>
                <NavLink style={{marginRight: "10px"}}  to="/dashboard">Panel de control</NavLink>
                <NavLink to="/record/5">Record</NavLink>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/record/:user" component={Record} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
            <h2>Footer Común</h2>
        </div>
    )
}
