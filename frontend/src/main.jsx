import App from './App.jsx';
import ReactDOM from 'react-dom/client';

import { AuthProvider } from './contexts/authContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
}

root.render(
  <Page/>
);