import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from '../hooks/useForm';
// NavLink o Link de react router dom para que no se recargue toda la página

// TODO: Implementar página de contacto

export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { name, onInputChange } = useForm({ name: q });
    const onSearch = (event) => {
        event.preventDefault();
        navigate(`search?q=${name}`);
    }

    return (
        <nav className="navbar navbar-expand bg-light p-2">
            <Link className="navbar-brand" to="/">Shop</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <div className='nav-item btn-group'>
                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtro
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-start">
                            <NavLink className="dropdown-item" to='/table' >Mesas</NavLink>
                            <hr className="dropdown-divider" />
                            <NavLink className="dropdown-item" to='/chair' >Sillas</NavLink>
                        </div>
                    </div>
                    <NavLink className="nav-item nav-link" to="/contact">Contacto</NavLink>
                </div>

                <div className="navbar-collapse d-flex justify-content-end">
                    <form
                        className="d-flex justify-content-end"
                        role="search"
                        onSubmit={onSearch}
                    >
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <NavLink className="nav-item nav-link me-3 ms-3" to="/shoppingBasket"><ShoppingCartIcon /></NavLink>
                </div>
            </div>
        </nav>
    )
}
