//const entrada = require('prompt-sync')({ sigint: true });
function fatorial(num) {
    if (num > 0) {
        if (num == 1) {
            return 1;
        } else {
            return fatorial(num - 1) * num;
        }
    } else {
        throw new Error(`${num} é inválido para o cálculo fatorial`);

    }
}
try {
    var num = parseInt(prompt("Informe um número inteiro positivo: "));
    alert(`${num}! = ${fatorial(num)}`);
} catch (error) {
    alert(error);
}
