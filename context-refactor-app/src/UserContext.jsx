import { createContext, useState } from 'react';

// 1. Create the Context object
export const UserContext = createContext();

// 2. Create the Provider component
export function UserProvider({ children }) {
  // Simple state with the required user info
  const [user, setUser] = useState({
    name: "Alex Doe",
    email: "alex@example.com",
    themePreference: "light"
  });

  return (
    // We pass the 'user' object into the value prop so anyone can access it
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}