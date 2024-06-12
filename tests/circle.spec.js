const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {

  it('1. Valida se circle retorna undefined, caso o parâmetro passado não seja um número', () => {
    expect(circle(false)).toBeUndefined();
    expect(circle('abc')).toBeUndefined();
    expect(circle('3')).toBeUndefined();
  });

  it('2. Valida se ao receber um raio, a função `circle` retorna um objeto contendo os valores esperados', () => {
      expect(circle(3.75)).toMatchObject({ radius: 3.75, area: '44', circumference: '24' });
    });

  it('', () => {
  });
  it('', () => {
  });
  it('', () => {
  });
  it('', () => {
  });
  

    //  

    // Teste se circle retorna um objeto. 
    expect(circle(4)).toBeInstanceOf(Object);
    // Teste se o objeto retornado possui 3 propriedades.
    let result = circle(10.3);
    expect(Object.keys(result).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à circunferência correta para um círculo de raio 2.
    result = circle(2);
    expect(result.circumference).toBeCloseTo((12.56));
    // Teste se dentro do objeto retornado, a função retorna uma `key` com `value` igual à área correta para um círculo de raio 3.
    result = circle(3);
    const roundedArea = Math.round(result.area).toPrecision(4);
    expect(parseFloat(roundedArea)).toBeCloseTo(28);
    // Teste se a função retorna, em um objeto, os dados corretos de um círculo de raio 3.
    const roundedCircumference = Math.round(result.circumference).toPrecision(4);
    expect(parseFloat(roundedCircumference)).toBeCloseTo(19);
    expect(result.radius).toBe(3);
  });
});