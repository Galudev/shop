import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import queryString from 'query-string';
import { getFurniture, getFurnitureByCategory, getFurnitureByName } from "./helpers";
import { ShopList } from "./pages";


export const Shop = () => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<ShopList furnitures={getFurniture()} />} />
                    <Route path="/search" element={<ShopList furnitures={getFurnitureByName(q)} />} />
                    <Route path="/table" element={<ShopList furnitures={getFurnitureByCategory('table')} />} />
                    <Route path="/chair" element={<ShopList furnitures={getFurnitureByCategory('chair')} />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
