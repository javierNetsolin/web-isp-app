import { createContext, useState, useEffect, ReactNode } from 'react';
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from 'firebase/auth';
interface UserValuesType {
  user: User | null;
}

export const Context = createContext<UserValuesType | null>(null);
export function AuthContext({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      return () => {
        if (unsubscribe) unsubscribe();
      };
    });
  }, []);

  const values = {
    user: user,
    setUser: setUser,
  };
  return (
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
}
