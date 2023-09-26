//npm install exceljs
const Excel = require('exceljs');

// Carrega o arquivo Excel
const workbook = new Excel.Workbook();
workbook.xlsx.readFile('d:\listagem2.xlsx')//Endereço do arquivo com os e-mails
  .then(() => {
    // Use a planilha desejada
    const worksheet = workbook.getWorksheet('Plan1'); // Altere o nome da planilha conforme necessário

    // Loop através das linhas da planilha
    worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
      const emailCell = row.getCell('A'); // Substitua 'A' pela coluna que contém os emails

      if (emailCell.value) {
        const email = emailCell.value.toString().trim();
        const emailValido = validarEmail(email);

        // Salva o resultado na próxima coluna (B neste caso)
        const resultadoCell = row.getCell('B'); // Substitua 'B' pela coluna onde deseja salvar o resultado

        if (emailValido) {
          resultadoCell.value = 'Válido';
        } else {
          resultadoCell.value = 'Inválido';
        }
      }
    });

    // Salva as alterações no arquivo Excel
    return workbook.xlsx.writeFile('d:\listagem_com_validacao.xlsx');
  })
  .then(() => {
    console.log('Validação de emails concluída e arquivo salvo com sucesso!');
  })
  .catch((error) => {
    console.error('Ocorreu um erro ao validar os emails: ', error);
  });

// Função para validar um email usando uma expressão regular simples
function validarEmail(email) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}
