/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/
const feedback = () => {
  const message = 'Eita pessoa boa!';
  return message;
};

const createStudent = (name) => {
  const initialFeedback = feedback();
  const estudante = { nome: name, feedback: () => initialFeedback };
  return estudante;
};

module.exports = createStudent;

console.log(createStudent('Raisa'));
