const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const result = productDetails('Colher', 'Vasilha');
  const productId1 = result[0].details.productId;
  const productId2 = result[1].details.productId; 
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(result).toBeInstanceOf(Array);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(result).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof result[0] && typeof result[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(result[0] !== result[1]).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
    expect(productId1.slice(-3) && productId2.slice(-3)).toBe('123');
  });
});
