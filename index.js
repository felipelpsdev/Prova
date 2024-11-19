import cesar from './cesar.js';
import readline from 'readline';

const { criptografia, cifraLetra, decifraLetra } = cesar;

function obterEntrada(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(pergunta, resposta => {
        rl.close();
        resolve(resposta);
    }));
}

async function main() {
    const mensagemOriginal = await obterEntrada("Digite a mensagem a ser criptografada (somente letras minúsculas): ");
    const chave = parseInt(await obterEntrada("Digite a chave de deslocamento (número inteiro): "), 10);

    const mensagemCriptografada = criptografia(mensagemOriginal, chave, cifraLetra);
    console.log("\nMensagem criptografada:", mensagemCriptografada);

    const mensagemDescriptografada = criptografia(mensagemCriptografada, chave, decifraLetra);
    console.log("Mensagem descriptografada:", mensagemDescriptografada);
}

main();
