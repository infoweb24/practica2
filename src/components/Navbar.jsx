
/*tiene su propia hoja de estilos*/ 
import '../components/Navbar.css'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        {/* Marca */}
        <a className="navbar-brand" href="#inicio">
          Empresa Eventos XYZ
        </a>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Opciones del menú */}
        <div className="collapse navbar-collapse" id="menuNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#descripciones">Descripciones</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#eventos">Eventos</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
