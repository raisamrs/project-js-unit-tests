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

  it('Verifica se createMenu retorna um objeto com a chave fetchMenu', () => {
    expect(notEmptyMenu).toHaveProperty('fetchMenu');
  });

  it('Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função', () => {
    expect(fetchMenu).toBeInstanceOf(Function);
  });

  it('Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks', () => {
    expect(Object.keys(fetchMenu())).toEqual(['food', 'drinks']);
  });

  it('Verificar se o menu passado para a função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()', () => {
    const expectedMenu = { food: {}, drinks: {} };
    expect(emptyMenu.fetchMenu()).toEqual(expectedMenu);
  });

  it('Verifica se createMenu({ food: {}, drinks: {} }) retorna um array vazio para a propriedade consumption', () => {
    expect(emptyMenu.consumption).toEqual([]);
  });

  it('Verifica se é exibida a mensagem "Item indisponível" e não altera consumption para item inexistente no menu', () => {
    try {
      notEmptyMenu.order('hamburger');
    } catch (error) {
      expect(error.message).toBe('Item "hamburger" indisponível no menu');
    }
    expect(notEmptyMenu.consumption).toEqual([]);
  });

  it('Verifica se o item é adicionado ao consumption para item existente no menu', () => {
    notEmptyMenu.order('salad');
    expect(notEmptyMenu.consumption).toEqual({ dish: 'salad' });
  });

/*   it('Verifica se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array consumption contém os itens pedidos', () => {
    notEmptyMenu2.order('pizza');
    notEmptyMenu2.order('salad');
    notEmptyMenu2.order('water');
    expect(notEmptyMenu2.consumption).toEqual(['pizza', 'salad', 'water']);
  }); */

/*   it('Verifica se a função order aceita pedidos repetidos sendo acrescidos a consumption', () => {

    notEmptyMenu3.order('pizza');
    notEmptyMenu3.order('cola');
    notEmptyMenu3.order('salad');

    // Adicionando o mesmo item mais de uma vez
    notEmptyMenu3.order('pizza');
    notEmptyMenu3.order('salad');

    expect(notEmptyMenu3.consumption).toEqual(['pizza', 'cola', 'salad', 'pizza', 'salad']);
  }); */

  it('Verifica se ao chamar a função pay() retorna a soma dos preços de tudo que foi pedido, conforme registrado em consumption', () => {
    expect(notEmptyMenu.pay()).toBeCloseTo(8.8, 2);
  });
});
