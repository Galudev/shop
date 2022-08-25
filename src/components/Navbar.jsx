import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useShoppingBasketStore } from "../hooks";
import { useState } from "react";
// NavLink o Link de react router dom para que no se recargue toda la página


export const Navbar = () => {

    const navigate = useNavigate();

    const [forSearch, setForSearch] = useState(false);

    const { name, onInputChange, onResetForm } = useForm({ name: '' });
    const onSearch = (event) => {
        event.preventDefault();
        setForSearch(!forSearch);
        if (name.length > 0) {
            navigate(`search?q=${name}`);
            onResetForm();
        }
    }

    const { count } = useShoppingBasketStore();

    return (
        <nav className="navbar navbar-expand p-2 navbar-shop navbar-dark">
            <Link className="navbar-brand" to="/">Shop</Link>

            <div className="navbar-collapse">
                <div className={`navbar-nav ${forSearch ? 'd-none' : ''} d-sm-flex`}>
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
                            className={`form-control field-search ${forSearch ? '' : 'd-none'} d-sm-flex`}
                            type="search"
                            placeholder=""
                            name='name'
                            value={name}
                            onChange={onInputChange}
                        />
                        <IconButton className="btn" type="submit" style={{ color: "#ffffff" }}><SearchIcon /></IconButton>
                    </form>

                    <NavLink className="nav-item nav-link me-3 ms-3" to="/shoppingBasket">
                        <Badge color="warning" badgeContent={count}>
                            <ShoppingCartIcon />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
