import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
// NavLink o Link de react router dom para que no se recargue toda la página


export const Navbar = () => {

    const navigate = useNavigate();

    const { name, onInputChange, onResetForm } = useForm({ name: '' });
    const onSearch = (event) => {
        event.preventDefault();
        onResetForm();
        navigate(`search?q=${name}`);
    }

    return (
        <nav className="navbar navbar-expand p-2 navbar-shop navbar-dark">
            <Link className="navbar-brand" to="/">Shop</Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <div className='nav-item btn-group'>
                        <Link className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filtro
                        </Link>
                        <div className="dropdown-menu dropdown-menu-start">
                            <NavLink className="dropdown-item nav-category-list" to='/table' >Mesas</NavLink>
                            <hr className="dropdown-divider" />
                            <NavLink className="dropdown-item nav-category-list" to='/chair' >Sillas</NavLink>
                        </div>
                    </div>
                    <NavLink className="nav-item nav-link active" to="/contact">Contacto</NavLink>
                </div>

                <div className="navbar-collapse d-flex justify-content-end">
                    <form
                        className="d-flex justify-content-end"
                        role="search"
                        onSubmit={onSearch}
                    >
                        <input
                            className="form-control field-search"
                            type="search"
                            placeholder=""
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                        <div className="btn-search-shop">
                            <IconButton className="btn" type="submit"><SearchIcon /></IconButton>
                        </div>
                    </form>

                    <NavLink className="nav-item nav-link me-3 ms-3" to="/shoppingBasket"><ShoppingCartIcon /></NavLink>
                </div>
            </div>
        </nav>
    )
}
