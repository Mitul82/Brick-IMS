import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext.jsx';

function SupervisorLayout() {
    const { user } = React.useContext(AuthContext);
    const location = useLocation();

    return (
        <>
            <nav className='bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-glow shadow-[0_35px_65px_hsl(38_92%_50%/0.1)] shadow-linear-to-br from-primary/10 via-transparent to-transparent'>
                <div className='container mx-auto px-4'>
                    <div className='flex h-10 justify-end-safe gap-4'>
                        <Link to={`/users/${user?.role}/production`}>
                            <button className={location.pathname === `/users/${user?.role}/production` ?  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer hover:text-foreground h-9 rounded-md px-3 underline' : 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:underline hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3'}>
                                Production
                            </button>
                        </Link>

                        <Link to={`/users/${user?.role}/inventory`}>
                            <button className={location.pathname === `/users/${user?.role}/inventory` ?  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer hover:text-foreground h-9 rounded-md px-3 underline' : 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:underline hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3'}>
                                Inventory
                            </button>
                        </Link>

                        <Link to={`/users/${user?.role}/dispatch`}>
                            <button className={location.pathname === `/users/${user?.role}/dispatch` ?  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:cursor-pointer hover:text-foreground h-9 rounded-md px-3 underline' : 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:underline hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3'}>
                                Dispatch
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>
    );
}

export default SupervisorLayout;