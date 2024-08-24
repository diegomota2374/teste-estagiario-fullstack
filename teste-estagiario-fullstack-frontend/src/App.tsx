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
import NotFound from "./pages/NotFound/NotFound";
import Loading from "./components/Loading/Loading";

const ProtectedRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === undefined) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/taskPage"
        element={<ProtectedRoute element={<TaskPage />} />}
      />
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/taskPage" : "/login"} />}
      />
      <Route path="*" element={<NotFound />} />
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
