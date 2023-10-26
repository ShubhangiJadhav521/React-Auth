import React, { ReactNode, createContext, useContext, useState } from 'react';

interface User {
  username: string;
  password: string;
}

interface UserContextProps {
  user: User | null;
  signUp: (username: string, password: string) => void;
  signIn: (username: string, password: string) => boolean;
  signOut: () => void;
}


const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null) || [];

  const signUp = (username: string, password: string) => {
    const newUser: User = { username, password };
    setUser(newUser);
  };


  const signIn = (username: string, password: string) => {
    if (user && user.username === username && user.password === password) {
      return true;
    }
    return false;
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
