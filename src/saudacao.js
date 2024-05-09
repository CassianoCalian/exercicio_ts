function saudacao(nome, sobrenome) {
    return "".concat(nome, " ").concat(sobrenome);
}
var nome = "Cassiano";
var sobrenome = "Calian";
var nomeCompleto = saudacao(nome, sobrenome);
console.log("Ol\u00E1, ".concat(nomeCompleto));
