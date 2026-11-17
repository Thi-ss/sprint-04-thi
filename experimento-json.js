// EXERCÍCIO 1.1
console.log("======Exercício 1.1======")

// Array de objetos
const historicoMensagens = [
    { id: 1, usuario: "Ana", texto: "Bom dia, turma!" },
    { id: 2, usuario: "Pedro", texto: "Servidor online!" }
];

// Atribuindo os dados anteriores a essa variável e transformando em uma string de JSON
const conteudoSalvar = JSON.stringify(historicoMensagens, null, 2);

// Mostrando a variável conteudoSalvar
console.log(conteudoSalvar);

// Mostrando o tipo de JSON da variável conteudoSalvar
console.log("Tipo da variável:", typeof conteudoSalvar);

//-------------------------------------------------------------------------------------------------

// EXERCÍCIO 1.2
console.log("======Exercício 1.2======")

// String
const jsonValido = '[{"id": 10, "usuario": "Lucas", "texto": "Teste"}]';

// Transformando a String em um objeto JSON
JSON.parse(jsonValido);

// String em formato JSON, porém está quebrado, falta: }]
const jsonQuebrado = '[{ id: 10, quebrado: sim ';

// try catch, irá mostrar erro porque a string não está no formato ideal para JSON (jsonQuebrado)
try {
    JSON.parse(jsonQuebrado);
} catch (erro) {
    console.error("Alerta: JSON corrompido! Detalhes:", erro.message);
}

//-------------------------------------------------------------------------------------------------