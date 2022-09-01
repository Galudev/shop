export const getFurnitureList = (furnitureList) => {

    const getFurnitureByCategory = (category) => {
        return furnitureList.filter(item => item.category === category);
    }

    const getFurnitureByName = (name) => {
        return furnitureList.filter(item => item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
    }

    const getFurnitureById = (id) => {
        return furnitureList.filter(item => item._id === id)[0];
    }

    const getFurnitureShuffle = () => {
        let currentIndex = furnitureList.length, temporaryValue, randomIndex;

        // Mientras queden elementos a mezclar...
        while (0 !== currentIndex) {

            // Seleccionar un elemento sin mezclar...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // E intercambiarlo con el elemento actual
            temporaryValue = furnitureList[currentIndex];
            furnitureList[currentIndex] = furnitureList[randomIndex];
            furnitureList[randomIndex] = temporaryValue;
        }

        return furnitureList;
    }

    return {
        getFurnitureByCategory,
        getFurnitureByName,
        getFurnitureById,
        getFurnitureShuffle
    }
}