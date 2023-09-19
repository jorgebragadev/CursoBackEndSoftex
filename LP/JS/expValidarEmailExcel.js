const XLSX = require('xlsx');

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validarEmails(worksheet) {
  const emailColumn = 'A';  // Coluna onde estão os e-mails (por exemplo, coluna A)
  const numEmails = 10;
  const resultados = [];

  for (let i = 1; i <= numEmails; i++) {
    const cellAddress = `${emailColumn}${i}`;
    const email = worksheet[cellAddress] ? worksheet[cellAddress].v : '';

    if (validarEmail(email)) {
      resultados.push(`${email} é um e-mail válido.`);
    } else {
      resultados.push(`${email} não é um e-mail válido.`);
    }
  }

  return resultados;
}

function lerPlanilha() {
  const workbook = XLSX.readFile('D:\Listagem.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

  const resultados = validarEmails(sheet);

  for (const resultado of resultados) {
    console.log(resultado);
  }
}

lerPlanilha();
