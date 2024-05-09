function saudacao(nome: string, sobrenome: string) {
  return `${nome} ${sobrenome}`;
}

const nome = "Cassiano";
const sobrenome = "Calian";

const nomeCompleto = saudacao(nome, sobrenome);

console.log(`Olá, ${nomeCompleto}`);
