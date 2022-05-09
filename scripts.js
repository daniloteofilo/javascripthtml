function exibirResultado(nome, imc, grau) {
    let mensagem = ""
    mensagem += "O Imc de "
    mensagem += nome
    mensagem += " é aproximadamente "
    mensagem += Math.round(imc)
    mensagem += " indicando que " + nome + " está com obesidade de grau "+ grau + "."

    document.getElementById("resultado").innerHTML = mensagem;

}

function calcular(){
    let nome = document.getElementsByClassName("nome")[0].value;
    let peso = document.getElementsByClassName("peso")[0].value;
    let altura = document.getElementsByClassName("altura")[0].value;
    
    let imc = peso / (altura**2);

    
    
    if (imc >= 40) {
        exibirResultado(nome, imc, "III")
        
    }

    else if (imc >=35 && imc <40) {
        exibirResultado(nome, imc, "II")
    }
    
    else if (imc >=30 && imc <35) {
        exibirResultado(nome, imc, "I")
        }

    else if (imc>= 25 && imc <30) {
        document.getElementById("resultado").innerHTML =("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com sobrepeso.");
    }

    else if (imc <25 && imc >= 18.5) {
        document.getElementById("resultado").innerHTML =("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está na faixa de peso ideal.");
    }

    else if (imc <18.5) {
        document.getElementById("resultado").innerHTML =("O Imc de " + nome + " é aproximadamente " + Math.round(imc) + " indicando que " + nome + " está com o peso abaixo do ideal.");

    }

    
    }
