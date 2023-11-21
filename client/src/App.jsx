import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import { SistemaProvider } from "./context/SistemaContext";

import "./App.css";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./pages/Logout";
import IngredientesPage from "./pages/IngredientesPage";

function App() {
  return (
    <AuthProvider>
      <SistemaProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="logout" element={<Logout />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/ingredientes" element={<IngredientesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SistemaProvider>
    </AuthProvider>
  );
}

export default App;
