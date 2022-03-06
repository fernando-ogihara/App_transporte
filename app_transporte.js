
function executarSorteio() {
    
    chute = prompt("Qual o seu número de sorte ?");
    num_sorteio =Math.round(Math.random()*10)+1;
    console.log(num_sorteio)

    while (chute<1 | chute>10) {
        chute = prompt("Digite um número entre 1 e 10");
    }

    num = chute

    num_sorteio =Math.round(Math.random()*9)+1;
    //console.log(num_sorteio)
    if (num == num_sorteio) {
        paragrafoResultado.innerHTML = "Você ganhou uma corrida!";
        paragrafoResultado.style.backgroundImage = "url('https://media.giphy.com/media/BIuuwHRNKs15C/giphy.gif')";
        
        } else {
            paragrafoResultado.innerHTML = "O número sorteado foi "+num_sorteio
            paragrafoResultado.style.color = "white";
            paragrafoResultado.style.fontSize = "26px";
            paragrafoResultado.style.fontWeight = "bolder";
            paragrafoResultado.style.backgroundImage = "url('Faust_o_Errou.gif')"  ;
            paragrafoResultado.style.backgroundRepeat = "no-repeat";
            paragrafoResultado.style.backgroundPosition = "center";
            paragrafoResultado.style.backgroundSize = "320px 326px";
        }
}


/*
function executarSorteio() {
    
    chute = prompt("Qual o seu número de sorte ?");
    num_sorteio =Math.round(Math.random()*10)+1;
    console.log(num_sorteio)

    while (chute<1 | chute>10) {
        chute = prompt("Digite um número entre 1 e 10");
    }

    num = chute

    
    if (num == num_sorteio) {
        paragrafoResultado.innerHTML = "Você ganhou uma corrida!";
        //paragrafoResultado.style.backgroundImage = "url('https://media.giphy.com/media/BIuuwHRNKs15C/giphy.gif')";
        
        } else {
            paragrafoResultado.innerHTML = "O número sorteado foi "+num_sorteio
            paragrafoResultado.style.color = "blue";
            paragrafoResultado.style.fontSize = "26px";
            paragrafoResultado.style.fontWeight = "bolder";
            //paragrafoResultado.style.backgroundImage = "url('Faust_o_Errou.gif')"  ;
            //paragrafoResultado.style.backgroundRepeat = "no-repeat";
            //paragrafoResultado.style.backgroundPosition = "center";
            //paragrafoResultado.style.backgroundSize = "320px 326px";
        }
}


//import {formataMoeda} from "../Uber/formataMoeda";

function calcular() {
    distancia = inputDistancia.value;
    tempomin = inputTempo.value;
    valor_corrida = (2+(distancia*1.4) + (tempomin*0.26));
    botaoCalcular.innerHTML = "Total R$ "+formataMoeda(valor_corrida); 
}

*/