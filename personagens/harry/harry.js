// Primeira Etapa - Pegar ou não? //

function decisao() {
    let respostaEtapa1 = prompt(
        '1. Harry pega o mapa, agradece os gêmeos e vai embora.\n2. Harry não pega o mapa, mas pergunta se não possuem alguma outra coisa para lhe oferecer.');
    if (respostaEtapa1 == 1) {
        alert("Harry veste sua capa da invisibilidade, abre o mapa e segue Snape até sua sala, durante a noite.");
        location.assign("harry2.html");
    } else if (respostaEtapa1 == 2) {
        alert("Os gêmeos dizem que sim e pregam uma peça em Harry, lhe dando um caramelo que faz a boca queimar, literalmente. Harry foi para enfermaria por isso. Tente novamente.");
        location.replace("../../index.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao();
    }
}

// Segunda Etapa -  O que falar? //

function decisao2() {
    let respostaEtapa2 = prompt(
        '1. Dizer a verdade, que estaria seguindo o professor.\n2. Mentir dizendo que é sonâmbulo, por isso saiu de seu dormitório.');
    if (respostaEtapa2 == 1) {
        alert("Snape se irrita e resolve levar o jovem para conversar com o Diretor.");
        location.assign("harry3.html");
    } else if (respostaEtapa2 == 2) {
        alert("Não acreditando na história, Snape confisca o mapa e a capa de Harry, escoltando-o de volta ao dormitório. Tente novamente.");
        location.replace("../../index.html");
    } else {
        alert("Por favor, digite 1 ou 2.");
        decisao2();
    }
}

// Terceira Etapa - O que contar? //

function decisao3() {
    let respostaEtapa3 = prompt(
        '1. "Eu acredito que o professor Snape é um comensal da morte e está tramando alguma coisa para te derrubar."\n2. "O professor vive pegando no meu pé, eu acho que ele tem algo pessoal comigo."');
    if (respostaEtapa3 == 1) {
        alert("Dumbledore fica preocupado, pois também acredita que Snape possa estar tramando algo, mas diz para o jovem deixar isso para as autoridades.");
        location.assign("harry-final.html");
    } else if (respostaEtapa3 == 2) {
        alert("Dumbledore diz que o jovem está procurando pelo em ovo e recomenda a ele tomar um chá de camomila para poder voltar a dormir. Tente novamente.");
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