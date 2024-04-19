import { Navigate } from 'react-router-dom';
import { ReactNode, useContext } from 'react';
import { Context } from '../context/AuthContext';

export function Protected({ children }: { children: ReactNode }) {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to="/singup" replace />;
  } else {
    return children;
  }
}
