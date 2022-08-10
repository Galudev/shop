import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "./components"
import queryString from 'query-string';
import { getFurniture, getFurnitureByCategory, getFurnitureByName } from "./helpers"
import { ShopList } from "./pages"
import { useEffect, useState } from "react";

const tables = getFurnitureByCategory('table');
const chairs = getFurnitureByCategory('chair');
const furnitureSort = getFurniture();

export const Shop = () => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [furnitureSearched, setFurnitureSearched] = useState([]);

    useEffect(() => {
        setFurnitureSearched(getFurnitureByName(q));
    }, [q]);


    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<ShopList furnitures={furnitureSort} />} />
                    <Route path="/tables" element={<ShopList furnitures={tables} />} />
                    <Route path="/chairs" element={<ShopList furnitures={chairs} />} />
                    <Route path="/search" element={<ShopList furnitures={furnitureSearched} />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
