const productDetails = require('../src/productDetails');

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {

  const result = productDetails('Colher', 'Vasilha');
  const productId1 = result[0].details.productId;
  const productId2 = result[1].details.productId;

  it('1. Valida de productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('2. Valida se o retorno da função é um array.', () => {
    expect(result).toBeInstanceOf(Array);

  });

  it('3. Valida se o array retornado pela função contém dois itens dentro', () => {
    expect(result).toHaveLength(2);
  });

  it('4. Valida se os dois itens dentro do array retornado pela função são objetos', () => {
    expect(typeof result[0] && typeof result[1]).toBe('object');
  });

  it('5. Valida se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(result[0] !== result[1]).toBeTruthy();
  });

  it('6. Valida se os dois productIds terminam com "123"', () => {
    expect(productId1.slice(-3) && productId2.slice(-3)).toBe('123');
  });
});
