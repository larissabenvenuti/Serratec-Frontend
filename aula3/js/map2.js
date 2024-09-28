const nomes = ["Ana", "Carla", "Maria", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i].substring(0, 1));
}

console.log(nomes.map((nome) => nome.substring(0, 1)));

const alunos = [
    { matricula: "123", nome: "Larissa", email: "larissa@example.com" },
    { matricula: "121", nome: "Eduarda", email: "eduarda@example.com" },
    { matricula: "122", nome: "Gabriel", email: "gabriel@example.com" },
];
console.log(alunos.map((aluno) => aluno.nome));

const alunosMap = alunos.map((aluno) => aluno.nome);
alunosMap.forEach((aluno) => console.log(aluno));

alunos.map((aluno) => aluno.nome).forEach((aluno) => console.log(aluno));
