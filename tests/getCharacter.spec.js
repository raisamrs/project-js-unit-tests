
const getCharacter = require('../src/getCharacter');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('1. Valida se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    expect(getCharacter()).toBeUndefined();

  });

  it('2. Valida se a função retorna o objeto correto para o parâmetro "Arya"', () => {
    expect(getCharacter('Arya')).toMatchObject({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
  });

  it('3. Valida se a função retorna o objeto correto para o parâmetro "Brienne"', () => {
    expect(getCharacter('Brienne')).toMatchObject({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.'
      ]
    });
  });

  it(' 4. Valida se a função retorna o objeto correto para o parâmetro "Melissandre"', () => {
    expect(getCharacter('Melissandre')).toMatchObject({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.'
      ]
    });
  });

  it('5. Valida se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.', () => {
    expect(getCharacter('ARYA')).toMatchObject({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    });
    expect(getCharacter('brienne')).toMatchObject({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.'
      ]
    });
    expect(getCharacter('mEliSsAnDrE')).toMatchObject({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.'
      ]
    });
  });

  it('6. Valida se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    expect(getCharacter('Sansa')).toBeUndefined();
  });

});
