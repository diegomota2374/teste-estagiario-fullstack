import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { AuthContextType, DecodedToken, User } from "../types";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const [userId, setUserId] = useState<number | null>(null);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<DecodedToken>(token);
      setUserId(decodedToken.id);
      setUserName(decodedToken.name);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    const decodedToken = jwtDecode<DecodedToken>(token);
    setUserId(decodedToken.id);
    setUserName(decodedToken.name);
    console.log("saber se o nome ta ok:", decodedToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userId, login, logout, userName }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
