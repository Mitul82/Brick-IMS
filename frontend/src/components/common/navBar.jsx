import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, BrickWall, ShipIcon, LogOut, LayoutDashboard, IndianRupee } from 'lucide-react';

import { AuthContext } from '../../contexts/authContext.jsx';

function Navbar() {
    const { user, logout } = React.useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <nav className='sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 shadow-glow shadow-[0_35px_65px_hsl(38_92%_50%/0.1)] shadow-linear-to-br from-primary/10 via-transparent to-transparent'>
            <div className='container mx-auto px-4'>
                <div className='flex h-16 items-center justify-between'>
                    <Link to='/' className='flex items-center gap-2 transition-opacity hover:opacity-80'>
                        <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-primary'>
                            <BrickWall className='h-5 w-5 text-background' />
                        </div>
                        <span className='font-heading text-xl font-bold'>Brick Portal</span>
                    </Link>

                    <div className='flex items-center gap-2'>
                        {user ? (
                            <>    
                                {user.role != 'Accountant' && (
                                    <Link to={`/users/${user.role}/shipments`}>
                                        <button className={location.pathname === `/users/${user.role}/shipments` ? 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3' : 'inline-flex items-center justify-center hover:cursor-pointer  whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary hover:text-foreground h-9 rounded-md px-3 gap-2'} size='sm'>
                                            <ShipIcon className='h-4 w-4'/>
                                            <span className='hidden sm:inline'>Shipments</span>
                                        </button>
                                    </Link>
                                )}

                                {user.role === 'Accountant' && (
                                    <Link to='/users/Accountant/payments'>
                                        <button className={location.pathname === `/users/${user.role}/payments` ? 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3' : 'inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50   [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary hover:text-foreground h-9 rounded-md px-3 gap-2'} size='sm'>
                                            <IndianRupee className='h-4 w-4'/>
                                            <span className='hidden sm:inline'>Payments</span>
                                        </button>
                                    </Link>
                                )}

                                <Link to={`/users/${user.role}`}>
                                    <button className={location.pathname === `/users/${user.role}` ? 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] hover:text-foreground hover:cursor-pointer h-9 rounded-md px-3' : 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary hover:text-foreground h-9 rounded-md px-3'} size='sm'>
                                        <LayoutDashboard className='h-4 w-4' />
                                        <span className='hidden sm:inline'>Dashboard</span>
                                    </button>
                                </Link>

                                <div className='ml-2 flex items-center gap-3 border-l border-border pl-4'>
                                    <div className='hidden items-center gap-2 sm:flex'>
                                        <Link to={`/${user.role}/account-info`}>
                                            <div className='hidden items-center gap-2 sm:flex'>
                                                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-secondary'>
                                                  <User className='h-4 w-4' />
                                                </div>
                                                <div className='text-sm'>
                                                  <p className='font-medium'>{user.name}</p>
                                                  <p className='text-xs text-muted-foreground capitalize'>{user.role}</p>
                                                </div>  
                                            </div>
                                        </Link>
                                    </div>
                                    <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary hover:text-foreground hover:cursor-pointer h-10 w-10' size='icon' onClick={handleLogout}>
                                        <LogOut className='h-4 w-4' />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to='/?mode=login'>
                                    <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-secondary-foreground shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] hover:text-background hover:cursor-pointer h-9 rounded-md px-3' size='sm'>
                                        Sign In
                                    </button>
                                </Link>

                                <Link to='/?mode=signup'>
                                    <button className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-background hover:bg-primary/90 shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] hover:cursor-pointer h-9 rounded-md px-3' size='sm'>
                                        Get Started
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;