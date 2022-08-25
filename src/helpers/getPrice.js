import { getFurnitureById } from "./getFurnitureList";


export const getPrice = (list) => {
    let price = 0;
    list.map(item => {
        price += item.count * getFurnitureById(item.id).price;
    });
    return price;
}