import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

export default function Router() {
    return (
        <div>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
        </div>
    )
}
