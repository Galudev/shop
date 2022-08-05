import { furnitures } from "../data"

export const getFurnituresByCategory = (category) => {
    return furnitures.filter(furniture => furniture.category === category)
}

export const getFurnitures = () => {
    return furnitures.sort((a, b) => { a - b })
}