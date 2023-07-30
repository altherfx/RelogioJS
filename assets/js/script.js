function trocarModo() {
    var imgModo = document.getElementById('imgModo');
    var body = document.body;

    if (imgModo.src.includes('assets/img/sun.png')) {
        imgModo.src = 'assets/img/moon.png';
        body.style.backgroundColor = '#FFFFFF';
    } else {
        imgModo.src = 'assets/img/sun.png';
        body.style.backgroundColor = '#1F1D1D';
    }
}

function exibirDataAtualizada() {
    let dataObjeto = new Date();
    let diasDaSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let meses = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let dia = dataObjeto.getDate();
    let mes = dataObjeto.getMonth();
    let ano = dataObjeto.getFullYear();

    let dataFormatada = diasDaSemana[dataObjeto.getDay()] + ", " + dia + " " + meses[mes] + " " + ano;
    let divData = document.getElementById('data');

    divData.innerHTML = dataFormatada;
}

var nome = prompt('Qual seu nome?');
document.getElementById('nome').innerHTML = `Olá, ${nome}!`;

function exibirHoraAtualizada() {
    let agora = new Date();
    let hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('hora').textContent = hora;
}

exibirDataAtualizada();
exibirHoraAtualizada();
setInterval(exibirHoraAtualizada, 1000);