import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar, RepeatedItem } from "./components";
import queryString from 'query-string';
import { getFurnitureList } from "./helpers";
import { Contact, ShopList, BasketList, ItemDetails, ShopFilter, LoginPage, RegisterPage, BuyPage } from "./pages";
import { useAuthStore, useFurnitureStore } from "./hooks";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

export const Shop = () => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const { startLoadingFurniture, furnitureList } = useFurnitureStore();
    const { isLogged, checkAuthToken } = useAuthStore();
    const { getFurnitureByName } = getFurnitureList(furnitureList);
    const [furnitureListByName, setFurnitureListByName] = useState([]);

    useEffect(() => {
        startLoadingFurniture();
        checkAuthToken();
    }, []);

    useEffect(() => {
        setFurnitureListByName(getFurnitureByName(q));
    }, [q]);

    return (
        <>
            <Navbar />

            <div className="container">
                {/* Poner appear en la transición hace que la animación se lleve a cabo aunque el 
                componente ya haya sido creado anteriormente.*/}
                <CSSTransition
                    appear
                    in
                    key={location.key}
                    classNames="transition"
                    timeout={500}
                >
                    <Routes>
                        <Route path="/" element={<ShopList furniture={furnitureList} />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/search" element={<ShopList furniture={furnitureListByName} />} />
                        <Route path="/filter/:category" element={<ShopFilter />} />
                        <Route path="/furniture/:id" element={<ItemDetails />} />

                        {(isLogged === 'authenticated') ? (
                            <>
                                <Route path="/shoppingBasket" element={<BasketList />} />
                                <Route path="/buy" element={<BuyPage />} />
                            </>
                        ) : (
                            <>
                                <Route path="/login" element={<LoginPage />} />
                                <Route path="/register" element={<RegisterPage />} />
                            </>
                        )}
                        <Route path="/*" element={<Navigate to="/" />} />
                    </Routes>
                </CSSTransition>
            </div>

            <RepeatedItem />
        </>
    )
}
