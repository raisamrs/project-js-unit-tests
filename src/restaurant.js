/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
  const customMenu = {
    fetchMenu: () => object,
    consumption: [],
    order: (dish) => {
      if (object.food[dish] || object.drinks[dish]) {
        customMenu.consumption.push({
          dish,
          price: object.food[dish]
            || object.drinks[dish],
        });
        return `Pedido: ${dish}`;
      }
      return 'Item indisponível';
    },
    pay: () => {
      let total = 0;
      for (let i = 0; i < customMenu.consumption.length; i += 1) {
        const payment = customMenu.consumption[i].price;
        total += payment;
      }
      const debt = total * 1.1;
      return debt;
    },
  };
  return customMenu;
};
/*
const menuData = {
  food: {
    pizza: 10,
    salad: 8,
    pasta: 12,
  },
  drinks: {
    cola: 3,
    juice: 5,
    water: 1,
  },
};
const resultOrder = createMenu(menuData).order('pizza');
console.log(resultOrder);
const resultConsumption = createMenu(menuData).consumption;
console.log(resultConsumption);
console.log(createMenu(menuData).consumption);
module.exports = createMenu;
 */

module.exports = createMenu;
