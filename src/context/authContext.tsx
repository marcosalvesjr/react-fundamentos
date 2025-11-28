import { createContext, useContext, useEffect, useState } from "react";
import type { AuthType } from "./types/authContextType";
import { UserType } from "./types/userType";
import { users } from "../pages/Products/utils/mockUsers/users";

const AuthContext = createContext<AuthType | undefined>(undefined);
const AUTH_USER = "@user_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const storeUser = localStorage.getItem(AUTH_USER);
    if (storeUser) {
      setUser(JSON.parse(storeUser));
    }
    setIsLoading(false);
  }, []);

  async function login(userName: string, password: string) {
    const foundUser = users.find(
      (u) => u.user === userName && u.password === password
    );
    if (!foundUser) {
      return false;
    }

    const loggedUser = { id: foundUser.id, user: foundUser.user };
    localStorage.setItem(AUTH_USER, JSON.stringify(loggedUser));

    return true;
  }

  function logout() {
    localStorage.removeItem("auth_user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}
