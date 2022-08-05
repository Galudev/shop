import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { chairs, tables } from "./data"
import { ShopList } from "./pages"


export const Shop = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<ShopList furnitures={[...chairs, ...tables]} />} />
                    <Route path="/tables" element={<ShopList furnitures={tables} />} />
                    <Route path="/chairs" element={<ShopList furnitures={chairs} />} />
                </Routes>
            </div>
        </>
    )
}
