function verificaAnoBisexto(y) {
    if ((y % 400 === 0) || (y % 4 === 0) && (y % 100 !== 0)) {
        return true;
    } else {
        return false;
    }

}
var ano = parseInt(prompt("Informe o ano: "));
if (verificaAnoBisexto(ano)) {
    console.log(`O ${ano} é Bissexto`);
} else {
    console.log(`O ${ano} não é Bissexto`);
}
