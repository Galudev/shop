import { getFurnitureList } from "./getFurnitureList";


export const getPrice = (list, furnitureList) => {
    const { getFurnitureById } = getFurnitureList(furnitureList);
    let price = 0;
    list.map(item => {
        price += item.count * getFurnitureById(item.id).price;
    });
    return price.toFixed(2);
}