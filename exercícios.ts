/**
 * EXERCÍCIOS
 * 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 * 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 * 
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de 
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 * 
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 * 
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 * e retorne somente a lista de assuntos do objeto.
 * 
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 * 
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 * 
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 * 
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 * 
 * 8 - Declare e popule um array com os objetos do exercício 7.
 * 
 * 9 - Faça uma função que receba um argumento de array de Professor 
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 * 
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 * 
 * 11 - Faça uma função que receba um argumento de array de Professores e 
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 * 
 */


// Exercicio 1
interface Pessoas {
    name: string,
    profession: string,
    age: number,
    interests: string[],
}

// Exercicio 2
const me: Pessoas = {
    name: "Danniel Schweidzon",
    profession: "Engenheiro Civil",
    age: 29,
    interests: [
     "Typescript",
     "Angular",
     "HTML",
     "CSS"
]
}

console.log("ex 2 ", me)
// Exercicio 3
function listaInteresses(pessoa: Pessoas) {
    return pessoa.interests
}

console.log( 'ex 3 ',listaInteresses(me))

// Exercicio 4
function listaInteressesType(pessoa: Pessoas) : string[] {
    return pessoa.interests
}

console.log("ex 4 ", listaInteressesType(me))

// Exercicio 5
enum courseSubjects {
    Angular = "Angular",
    Typescript = "Typescript",
    Git = "Git"
}

// Exercicio 6
interface Professors {
    name: string,
    subject: courseSubjects[]
}
// Exercicio 7
const Alan: Professors = {
    name: "Alan",
    subject: [
        courseSubjects.Angular,
        courseSubjects.Typescript,
        courseSubjects.Git,         
    ]
}
const Nathan: Professors = {
    name: "Nathan",
     subject: [
       courseSubjects.Angular,
       courseSubjects.Typescript,             
     ]
}
// Exercicio 8
const teachers: Professors[] = [Alan, Nathan]
console.log("ex 8 ", teachers)

// Exercicio 9

const teacherNames = (professor:Professors[]) : string[] => {
    return teachers.map(professor => professor.name)
}
console.log("ex 9 ", teacherNames(teachers))
// Exercicio 10

const teacherSubjects = (professor:Professors[]) : object => {
    return teachers.map(professor => professor.subject)
}

console.log("ex 10 ", teacherSubjects(teachers))

// Exercicio 11

const teachTypeScript = (professor:Professors[]) : any => {
    return teachers.find(professor => professor.subject.includes(courseSubjects.Typescript))
}

console.log("ex 11. ", teachTypeScript(teachers))