import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navBar navbar navbar-expand-lg bg-body-tertiary mb-3 ">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <h3>Tienda X</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 alignText ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  <h6>Inicio</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"productos"}>
                  <h6>Productos</h6>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <input
                className="btn  btn-outline-light containerButton "
                type="submit"
                value={"Search"}
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
