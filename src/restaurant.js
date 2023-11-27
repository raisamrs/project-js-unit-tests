/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (objectMenu) => {
  const menu = {
    fetchMenu: () => objectMenu,
    consumption: [],
    order: (item) => {
      const isFoodAvailable = objectMenu.food && objectMenu.food[item];
      const isDrinkAvailable = objectMenu.drinks && objectMenu.drinks[item];

      if (isFoodAvailable || isDrinkAvailable) {
        menu.consumption.push(item);
      } else {
        console.log('Item indisponível');
      }
      return menu;
    },
    pay: () => {
      const total = menu.consumption.reduce((acc, item) => {
        const price = objectMenu.food[item] || objectMenu.drinks[item];
        return acc + price;
      }, 0);
      return total * 1.1;
    },
  };

  return menu;
};

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
module.exports = createMenu;

/* const menuObject = createMenu(menuData);
menuObject.order('pizza').order('cola').order('salad');
console.log(menuObject.consumption); // Saída esperada: ['pizza', 'cola', 'salad']

const totalPayment = menuObject.pay();
console.log(totalPayment);  */
