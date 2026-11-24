// EXERCÍCIO 2.1

// Importando as funções mkdir (cria pastas) e writeFile (escreve algo num arquivo)
import { mkdir, writeFile, readFile } from "node:fs/promises";

// Criando um JSON
const lindos = [
    { id: 1, usuario: "Kevin" },
    { id: 2, usuario: "Thiago" }
];

// Criando uma arrow function para converter JSON em string e adiciona-la ao arquivo
const salvarHistorico = async (lista) => {

    // Criando a pasta data através do comando mkdir via URL
    await mkdir(new URL("./data/", import.meta.url), { recursive: true });

    // Adicionado mensagens-teste.json na pasta data
    const caminhoArquivo = new URL("./data/mensagens-teste.json", import.meta.url);

    // O JSON 'lista' fornecido na função, que está em string, é adicionado no arquivo 'mensagens-teste.json', que está na pasta data (devido a variável caminhoArquivo)
    await writeFile(caminhoArquivo, JSON.stringify(lista, null, 2), "utf8");
};

// Aplicando a função na variável 'lindos'
salvarHistorico(lindos);

// EXERCÍCIO 2.2

// Criando uma função assíncrona
async function lerDadosSeguros(nomeArquivo) {
    try {
        // Isso irá ler o conteúdo do arquivo inserido na função por meio de 'nomeArquivo'
        const conteudo = await readFile(nomeArquivo, "utf8");

        // Irá transformar o conteúdo do arquivo em JSON e exibi-lo
        return JSON.parse(conteudo);

    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        } else {
            throw erro;
        }
    }

};

const dados = await lerDadosSeguros(new URL("./data/arquivo-fantasma.json", import.meta.url));
console.log("Resultado com arquivo ausente:", dados);