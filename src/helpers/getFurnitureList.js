import { furniture } from "../data"

export const getFurnitureByCategory = (category) => {
    return furniture.filter(item => item.category === category);
}

export const getFurniture = () => {
    return shuffle(furniture);
}

export const getFurnitureByName = (name) => {
    return furniture.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
}

export const getFurnitureById = (id) => {
    return furniture.filter(item => item.id === id)[0];
}

const shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {

        // Seleccionar un elemento sin mezclar...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // E intercambiarlo con el elemento actual
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

