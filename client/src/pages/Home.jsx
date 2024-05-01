import Navbar from "../components/navbar/Index";

import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {
  const { isAuthenticated, loading } = useAuth();

  if (loading)
    return (
      <section className="presentation">
        <h1>Loading...</h1>
      </section>
    );

  return (
    <>
      <Navbar auth={isAuthenticated} />
      {isAuthenticated ? (
        <div className="container">
          <div className="container-btn">
            <a className="btn-page" href="/ingredientes">
              Tus Ingredientes
            </a>
          </div>
          <div className="container-btn">
            <a className="btn-page" href="/productos">
              Tus Productos
            </a>
          </div>
        </div>
      ) : (
        <div className="container">
          <section className="presentation">
            <h1>Crea Tus Propias Recetas</h1>

            <p>
              Para agregar tus ingredientes y crear tus recetas registrate en
              nuestra pagina.
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default Home;
