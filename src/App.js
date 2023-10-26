import "./app/common/styles/App.css";
import { useAuth } from "./app/common/utils/authContext";
import Header from "./app/features/core/header/header";
import SideNav from "./app/features/core/sidebar/sidebar";
import Login from "./app/features/pages/login/presentation/login";

import AppRoutes from "./app/routes/routes";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Router>
        {isLoggedIn ? (
          <div className="App">
            <SideNav />
            <div className="Content">
              <Header />
              <AppRoutes />
            </div>
          </div>
        ) : (
          <>
            <Routes>
              <Route path="/login" element={<Login />} />
            </Routes>
            <Navigate to="/login" />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
