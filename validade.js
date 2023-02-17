const moment = require('moment');

const dataEntrada = moment('2023-02-15'); // data de entrada do produto
const dataValidade = moment('2023-02-28'); // data de validade do produto

const diasRestantes = dataValidade.diff(moment(), 'days'); // calcula os dias restantes para o vencimento

// verifica se a data de validade está a menos de 15 dias de expirar
if (diasRestantes <= 15) {
    console.log("Atenção! Produto vence em:", dataValidade.format('DD/MM/YYYY'), "Faltam", diasRestantes, "dias");
} else {
    console.log("Produto válido até:", dataValidade.format('DD/MM/YYYY'), "Faltam", diasRestantes, "dias");
}
