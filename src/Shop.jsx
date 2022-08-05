import { useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { furnitures } from "./data"
import { getFurnitures, getFurnituresByCategory } from "./helpers"
import { ShopList } from "./pages"


export const Shop = () => {

    const tables = useMemo(() => getFurnituresByCategory('table'), [furnitures]);
    const chairs = useMemo(() => getFurnituresByCategory('chair'), [furnitures]);
    const furnituresSort = getFurnitures();

    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<ShopList furnitures={furnituresSort} />} />
                    <Route path="/tables" element={<ShopList furnitures={tables} />} />
                    <Route path="/chairs" element={<ShopList furnitures={chairs} />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}
