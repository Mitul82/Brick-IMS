import React from 'react';
import toast from 'react-hot-toast';
import { Navigate, Outlet } from 'react-router-dom';

import { AuthContext } from '../../contexts/authContext.jsx';

function ProtectedRoute({ allowedRole }) {
  const { user, token } = React.useContext(AuthContext);

  const isAllowed = token && user?.role === allowedRole;

  React.useEffect(() => {
    if (!isAllowed) {
      toast.error('Please login first');
    }
  }, [isAllowed]);

  if (!isAllowed) {
    return <Navigate to={`/auth?mode=login&role=${allowedRole}`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;