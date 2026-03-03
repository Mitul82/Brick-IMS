import App from './App.jsx';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './contexts/authContext.jsx';
import { OwnerProvider } from './contexts/OwnerContext.jsx';
import { ShopKeeperProvider } from './contexts/ShopKeeperContext.jsx';
import { SupervisorProvider } from './contexts/SupervisorContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
    return (
        <AuthProvider>
            <OwnerProvider>
                <SupervisorProvider>
                    <ShopKeeperProvider>
                        <App/>
                    </ShopKeeperProvider>
                </SupervisorProvider>
            </OwnerProvider>
        </AuthProvider>
    );
}

root.render(
  <Page/>
);