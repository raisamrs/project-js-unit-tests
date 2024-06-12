const createMenu = require('../src/restaurant.js');

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
const notEmptyMenu = createMenu(menuData);
const notEmptyMenu2 = createMenu(menuData);
const notEmptyMenu3 = createMenu(menuData);
const fetchMenu = createMenu(menuData).fetchMenu;
const emptyMenu = createMenu({ food: {}, drinks: {} });

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  it('1. Valida se createMenu retorna um objeto com a chave fetchMenu', () => {
    expect(notEmptyMenu).toHaveProperty('fetchMenu');
  });

  it('2. Valida se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () => {
    expect(fetchMenu).toBeInstanceOf(Function);
  });

  it('3. Valida se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    expect(Object.keys(fetchMenu())).toEqual(['food', 'drinks']);
  });

  it('4. Valida se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
    const expectedMenu = { food: {}, drinks: {} };
    expect(emptyMenu.fetchMenu()).toEqual(expectedMenu);
  });

  it('5. Valida se createMenu({ food: {}, drinks: {} }) retorna um array vazio para a propriedade consumption', () => {
    expect(emptyMenu.consumption).toEqual([]);
  });

  it('6. Valida se é exibida a mensagem "Item indisponível" e não altera consumption para item inexistente no menu', () => {
    try {
      notEmptyMenu.order('hamburger');
    } catch (error) {
      expect(error.message).toBe('Item "hamburger" indisponível no menu');
    }
    expect(notEmptyMenu.consumption).toEqual([]);
  });

  it('7. Valida se o item é adicionado ao consumption para item existente no menu', () => {
    notEmptyMenu.order('salad');
    const dishValue = notEmptyMenu.consumption[0].dish;
    expect(dishValue).toBe('salad');
  });

  it('8. Valida se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos', () => {
    let arrDishes = [];
    notEmptyMenu2.order('pizza');
    notEmptyMenu2.order('salad');
    notEmptyMenu2.order('water');
    for (let i = 0; i < notEmptyMenu2.consumption.length; i += 1) {
      const dishValue = notEmptyMenu2.consumption[i].dish;
      arrDishes.push(dishValue);
    }
    
    expect(arrDishes).toEqual(['pizza', 'salad', 'water']);
  });

    it('9. Valida se a função order aceita pedidos repetidos sendo acrescidos a consumption', () => {
  
      let arrDishes = [];
      notEmptyMenu3.order('pizza');
      notEmptyMenu3.order('cola');
      notEmptyMenu3.order('salad');
  
      // Adicionando o mesmo item mais de uma vez
      notEmptyMenu3.order('pizza');
      notEmptyMenu3.order('salad');
    for (let i = 0; i < notEmptyMenu3.consumption.length; i += 1) {
      const dishValue = notEmptyMenu3.consumption[i].dish;
      arrDishes.push(dishValue);
    }
  
      expect(arrDishes).toEqual(['pizza', 'cola', 'salad', 'pizza', 'salad']);
    });

  it('10. Valida se ao chamar a função pay() retorna a soma dos preços de tudo que foi pedido, conforme registrado em consumption', () => {
    expect(notEmptyMenu.pay()).toBeCloseTo(8.8, 2);
  });
});
