import React from 'react';
import toast from 'react-hot-toast';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { User, Store, BrickWall } from 'lucide-react';

import { AuthContext } from '../contexts/authContext.jsx';

function AuthPage() {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = React.useState(false);
    const [mode, setMode] = React.useState(searchParams.get('mode') || 'login');
    const [formData, setFormData] = React.useState({ name: '', email: '', password: '', role: 'default' });

    const { login, signup, user } = React.useContext(AuthContext);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(user) {
            navigate(`/users/${user.role}`);
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            if(mode === 'login') {
                const success = await login(formData);

                if(success) {
                    navigate(`/users/${user.role}`);
                }

                return;
            }

            if(mode === 'signup') {
                const success = await signup(formData);

                if(success) {
                    navigate(`/users/${user.role}`);
                }

                return;
            }
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData(prev => ({
              ...prev,
              [name]: value,
        }));
    }

    return (
        <main className='flex-1 flex items-center justify-center p-4'>
            <div className='w-full max-w-md animate-fade-in'>
                <div className='text-center mb-8'>
                    <Link to='/' className='inline-flex items-center gap-2'>
                        <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary'>
                            <BrickWall className='lucide lucide-utensils-crossed h-6 w-6 text-background'/>
                        </div>
                        <span className='font-heading text-card text-2xl font-bold'>Brick Portal</span>
                    </Link>
                </div>

                <div className='rounded-lg border bg-card text-background shadow-sm border-border/50'>
                    <div className='flex flex-col space-y-1.5 p-6 text-center'>
                        <h3 className='font-semibold tracking-tight font-heading text-xl'>
                            {mode === 'login' ? 'Welcome back' : 'Create an Account'}
                        </h3>
                        <p className=''>
                            {mode === 'login' ? 'Sign in to manage your business' : 'Get started with Brick Portal today'}
                        </p>
                    </div>

                    <div className='p-6 pt-0'>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className='space-y-2'>
                                <label htmlFor='role-select' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    Role
                                </label>
                                <select id='role-select' name='role' value={formData.role} onChange={handleInputChange} className='flex h-10 text-muted-foreground w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'>
                                    <option value='default' disabled>--Select Your Role--</option>
                                    <option key='Owner/Manager' value='Owner/Manager'>Owner/Manager</option>
                                    <option key='Supervisor' value='Supervisor'>Supervisor</option>
                                    <option key='StoreKeeper' value='StoreKeeper'>StoreKeeper</option>
                                    <option key='Accountant' value='Accountant'>Accountant</option>
                                </select>
                            </div>

                            {mode === 'signup' && (
                                <div className='space-y-2'>
                                    <label htmlFor='name' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                        Full Name
                                    </label>
                                    <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} required placeholder='John Doe' className='flex h-10 text-muted-foreground w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'/>
                                </div>
                            )}

                            <div className='sace-y-2'>
                                <label htmlFor='email' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    Email
                                </label>
                                <input type='email' id='email' name='email' value={formData.email} onChange={handleInputChange} required placeholder='ABC@example.com' className='flex h-10 text-muted-foreground w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'/>
                            </div>

                            <div className='space-y-2'>
                                <label htmlFor='email' className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                                    Password
                                </label>
                                <input type='password' id='password' name='password' value={formData.password} onChange={handleInputChange} required placeholder='••••••••' className='flex h-10 text-muted-foreground w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'/>
                            </div>

                            <button type='submit' size='h-12 rounded-lg px-8 text-base' disabled={loading} className='mb-6 mt-4 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap bg-primary text-secondary hover:bg-primary/90 shadow-glow hover:shadow-[0_0_40px_hsl(38_92%_50%/0.3)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50s p-2.5 hover:cursor-pointer rounded-2xl'>
                                {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
                            </button>
                        </form>

                        <div className='mt-6 text-center text-sm'>
                            {mode === 'login' ? (
                                <p className='text-background'>
                                    Don't have an account?{' '}
                                    <button type='button' onClick={() => setMode('signup')} className='text-background hover:underline hover:cursor-pointer font-medium'>
                                        Sign up
                                    </button>
                                </p>
                            ) : (
                                <p className='text-background'>
                                    Already have an account?{' '}
                                    <button type='button' onClick={() => setMode('login')} className='text-background hover:underline hover:cursor-pointer font-medium'>
                                        Sign in
                                    </button>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default AuthPage;