// Primeira Etapa - Que decisão tomar? //

function decisao() {
    let respostaEtapa1 = prompt(
        '1. Ronald aceita a oferta de Ginny.\n2. Ronald recusa a oferta da irmã.');
    if (respostaEtapa1 == 1) {
        alert("Ronald pede a Ginny que procure nos andares de cima e ele parte para procurar nos andares de baixo.");
        window.location.assign("ron2.html");
    } else if (respostaEtapa1 == 2) {
        alert("Irritada, ela esconde a varinha de Ronald, fazendo com que ele definitivamente perca o trem. Tente novamente.");
        window.location.replace("../../index.html")
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao();
    }
}

// Segunda Etapa -  O que fazer? //

function decisao2() {
    let respostaEtapa2 = prompt(
        '1. Sai correndo para perguntar à Molly.\n2. Continua a procura, já imaginando onde Perebas sempre está.');
    if (respostaEtapa2 == 1) {
        alert("Ronald encontra sua mãe na cozinha preparando um chá.");
        location.assign("ron3.html");
    } else if (respostaEtapa2 == 2) {
        alert("No caminho para o esconderijo do Perebas, que fica a alguns metros de casa, Ronald cai num buraco e não consegue sair, pois está sem sua varinha. Tente novamente.");
        location.replace("../../index.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao2();
    }
}

// Terceira Etapa - O que será que faço? //

function decisao3() {
    let respostaEtapa3 = prompt(
        '1. Todo trêmulo dispara: "Sim, a senhora sempre sabe onde está tudo, eu preciso do Perebas, mãe!".\n2. Pensa em responder com a mesma pergunta, com cuidado, para não levar outro sermão.');
    if (respostaEtapa3 == 1) {
        alert("Molly fica espantada com a audácia de Ronald, mas resolve levar numa boa.");
        location.assign("ron-final.html");
    } else if (respostaEtapa3 == 2) {
        alert("Os gritos de sua mãe sempre o apavoram, mas esse o deixou paralisado de medo. Após um tempo parado, saiu da cozinha e continuou sua procura, sem sucesso. Tente novamente.");
        location.replace("../../index.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao3();
    }
}

// De volta ao início //

function inicio() {
    location.replace("../../index.html");
}