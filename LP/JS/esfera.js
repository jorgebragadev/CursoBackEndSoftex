const PI = 3.1415;

function areaEsfera(raio) {
    let area = 4 * PI * raio ** 2;
    return area;
}

function volumeEsfera(raio) {
    return (4 / 3) * PI * raio ** 3;
}

var r = parseFloat(prompt("Informe o raio da esfera: "));
console.log(`Área da esfera = ${areaEsfera(r).toFixed(2)} \nVolume da esfera = ${volumeEsfera(r).toFixed(2)}`);
