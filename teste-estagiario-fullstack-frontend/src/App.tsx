import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import TaskPage from "./pages/TaskPage/TaskPage";

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  console.log(
    "Estado de autenticação dentro de ProtectedRoute:",
    isAuthenticated
  ); // Verifique o estado
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  console.log("Estado de autenticação dentro de AppRoutes:", isAuthenticated); // Verifique o estado

  if (isAuthenticated === undefined) {
    // Enquanto o estado de autenticação está sendo determinado, exiba um carregamento ou algo similar
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/taskpage"
        element={<ProtectedRoute element={<TaskPage />} />}
      />
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/taskpage" : "/login"} />}
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;
