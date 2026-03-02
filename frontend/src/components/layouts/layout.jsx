import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from '../common/navBar.jsx';

function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    );
}

export default Layout;