function criptografia(mensagem, chave, converter) {
    return mensagem
        .split('')
        .map(letra => converter(letra, chave))
        .join('');
}

function cifraLetra(letra, chave) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const posicao = alfabeto.indexOf(letra);
    if (posicao === -1) return letra;
    const novaPosicao = (posicao + chave) % 26;
    return alfabeto[novaPosicao];
}

function decifraLetra(letra, chave) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const posicao = alfabeto.indexOf(letra); 
    if (posicao === -1) return letra; 
    const novaPosicao = (posicao - chave + 26) % 26;
    return alfabeto[novaPosicao];
}

export default { criptografia, cifraLetra, decifraLetra };
