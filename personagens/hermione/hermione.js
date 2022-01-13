// Primeira Etapa - O que ela decide? //

function decisao() {
    let respostaEtapa1 = prompt(
        '1. Seguir o Canino.\n2. Ir por conta própria.');
    if (respostaEtapa1 == 1) {
        alert("Hermione faz um carinho em seu companheiro e ambos saem da casa de Hagrid em direção à floresta.");
        location.assign("hermione2.html");
    } else if (respostaEtapa1 == 2) {
        alert("Hermione se perde na floresta e acaba se deparando com um Lobisomem, não sobrevivendo ao encontro. Tente novamente. ");
        location.replace("../../index.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao();
    }
}

// Segunda Etapa -  Qual caminho ela escolhe? //

function decisao2() {
    let respostaEtapa2 = prompt(
        '1. Segue pela ESQUERDA.\n2. Segue pela DIREITA.');
    if (respostaEtapa2 == 1) {
        alert("Ao seguir o caminho da esquerda, Hermione e Canino são cercados por aranhas gigantes, não sobrevivendo ao encontro. Tente novamente.");
        location.replace("../../index.html");
    } else if (respostaEtapa2 == 2) {
        alert("Após andar ladeira abaixo, Hermione avista Bicuço.");
        location.replace("hermione3.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao2();
    }
}

// Terceira Etapa - O que ela faz? //

function decisao3() {
    let respostaEtapa3 = prompt(
        '1. Procura em sua bolsa de contas algo que possa ser útil.\n2. Utiliza o feitiço "Bombarda" para explodir a árvora e libertar Bicuço.');
    if (respostaEtapa3 == 1) {
        alert("Hermione acha em sua bolsa um alicate para cortar cadeado e usa ele para livrar Bicuço sem fazer barulho.");
        location.assign("hermione-final.html");
    } else if (respostaEtapa3 == 2) {
        alert("Desesperada para tentar ajudar, ao utilizar o feitiço, Bicuço foi libertado, mas estilhaços da árvore perfuraram suas asas, impossibilitando a fuga. Tente novamente.");
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