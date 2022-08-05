import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from "react-router-dom"
// NavLink o Link de react router dom para que no se recargue toda la página

// TODO: Implementar página de contacto y el carrito
// TODO: Colocar icono del carrito
// TODO: Implementar funcionalidad buscar 

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-light p-2">
            <Link className="navbar-brand" to="/">Shop</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Filtro
                    </Link>
                    <div className="dropdown-menu ms-4">
                        <NavLink className="dropdown-item" to="/tables">Mesas</NavLink>
                        <hr className="dropdown-divider" />
                        <NavLink className="dropdown-item" to="/chairs">Sillas</NavLink>
                    </div>
                    <NavLink className="nav-item nav-link" to="/contact">Contacto</NavLink>
                </div>

                <div className="navbar-collapse d-flex justify-content-end">
                    <NavLink className="nav-item nav-link" to="/buy"><ShoppingCartIcon /></NavLink>
                    <form className="d-flex justify-content-end ms-4" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
