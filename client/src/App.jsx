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
import IngredientesFormPage from "./pages/IngredientesFormPage";
import ProductosPage from "./pages/ProductosPage";
import ProductosFormPage from "./pages/ProductosFormPage";
import ProductoIngredientesPage from "./pages/ProductoIngredientesPage";
import IngredientesSelectPage from "./pages/IngredientesSelectPage";

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
              <Route path="/createIngrediente" element={<IngredientesFormPage />} />
              <Route path="/updateIngrediente/:id" element={<IngredientesFormPage />} />
              <Route path="/productos" element={<ProductosPage />}/>
              <Route path="/createProductos" element={<ProductosFormPage />}/>
              <Route path="/updateproducto/:id" element={<ProductosFormPage />} />
              <Route path="/getIngredientes/:id" element={<ProductoIngredientesPage />} />
              <Route path="/selectIngredientes/:id" element={<IngredientesSelectPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SistemaProvider>
    </AuthProvider>
  );
}

export default App;
