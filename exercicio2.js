/*
Bora praticar e rever tudo o que foi ensinado na aula? *💜*

Nesse desafio você irá criar uma lista de *estudantes* e,
cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma *função* que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é *7, 
       verifique **se* cada aluno obteve sucesso ou não 
       em entrar no concurso e mostre uma mensagem na tela.
*/
const students = [
  {
    name: 'Mayk',
    note1: 9,
    note2: 10
  },
  {
    name: 'Kevin',
    note1: 3,
    note2: 2
  },
  {
    name: 'Roberto',
    note1: 4,
    note2: 6
  },
  {
    name: 'Juliana',
    note1: 7,
    note2: 8
  }
]
function average(student){
  let result = (student.note1+student.note2)/2
  return result
}
alert('Resultado do concurso: ')
for(let student of students){
  let result = average(student)
  if(result >= 7){
    alert(`Parabéns, ${student.name} você passou no concurso,
    sua média foi ${result}`)
  }else{
    alert(`Olá ${student.name}, infelizmente você não passou no consurso,
    sua média foi ${result}.`)
  }
}