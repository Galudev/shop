import { getFurnitureList } from "./getFurnitureList";


export const getPrice = (furnitureList, list) => {
    let price = 0;
    list.map(item => {
        price += item.count * getFurnitureList(furnitureList).getFurnitureById(item.id).price;
    });
    return price;
}