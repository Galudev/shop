import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar, RepeatedItem } from "./components";
import queryString from 'query-string';
import { getFurniture, getFurnitureByCategory, getFurnitureByName } from "./helpers";
import { ShopList } from "./pages";
import { useShoppingBasketStore } from "./hooks";
import { useEffect, useState } from "react";
import { BasketList } from "./pages/shoppingBasket/BasketList";

const furnitureList = getFurniture();

export const Shop = () => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const { startLoadingList, shoppingBasketList } = useShoppingBasketStore();
    const [furnitureListByName, setFurnitureListByName] = useState([]);

    useEffect(() => {
        startLoadingList();
    }, []);

    useEffect(() => {
        setFurnitureListByName(getFurnitureByName(q));
    }, [q]);

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<ShopList furnitures={furnitureList} />} />
                    <Route path="/search" element={<ShopList furnitures={furnitureListByName} />} />
                    <Route path="/table" element={<ShopList furnitures={getFurnitureByCategory('table')} />} />
                    <Route path="/chair" element={<ShopList furnitures={getFurnitureByCategory('chair')} />} />
                    <Route path="/shoppingBasket" element={<BasketList furniture={shoppingBasketList} />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>

            <RepeatedItem />
        </>
    )
}
