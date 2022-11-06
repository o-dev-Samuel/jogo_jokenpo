let pontosJogador = 0;
let pontosComputador = 0;
let vencedor = false;
let imgMaquina = document.getElementById('imgmaquina')


let escolhaJogador = 1;

// Jogador escolhe pedra
document.getElementById('btnpedra').addEventListener('click', () => {
    escolhaJogador = 1;
    document.getElementById('imgusuario').setAttribute('src', './img/pedra.jpg')
    ponto()
})


document.getElementById('btnpapel').addEventListener('click', () => {
    escolhaJogador = 2;
    document.getElementById('imgusuario').setAttribute('src', './img/papel.jpg')
    ponto()
})

document.getElementById('btntesoura').addEventListener('click', () => {
    escolhaJogador = 3;
    document.getElementById('imgusuario').setAttribute('src', './img/tesoura.png')
    ponto()
})


// Verificando o pontuador
function ponto() {
    // Guardando a escolha do jogador



    // Criando a escolha do computador
    function numAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    var escolhaComputador = numAleatorio(1, 4)

    // Definindo o pontuador
    if (escolhaJogador == 1) {
        switch (escolhaComputador) {
            case 2:
                imgMaquina.setAttribute('src', './img/papel.jpg')
                //computador ganha
                alert(`Você: PEDRA  //  Computador: PAPEL = COMPUTADOR PONTUOU!`)
                pontosComputador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            case 3:
                imgMaquina.setAttribute('src', './img/tesoura.png')
                // Usuario ganha
                alert(`Você: PEDRA  //  Computador: TESOURA = VOCÊ PONTUOU!`)
                pontosJogador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            default:
                imgMaquina.setAttribute('src', './img/pedra.jpg')
                //empate
                alert(`Você: PEDRA  //  Computador: PEDRA = NINGUÉM PONTUOU!`)
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
        }
    } else if (escolhaJogador == 2) {
        switch (escolhaComputador) {
            case 1:
                //usuario ganha
                alert(`Você: PAPEL  //  Computador: PEDRA = VOCÊ PONTUOU!`)
                pontosJogador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            case 3:
                //computador ganha
                alert(`Você: PAPEL  //  Computador: TESOURA = COMPUTADOR PONTUOU!`)
                pontosComputador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            default:
                // empate
                alert(`Você: PAPEL  //  Computador: PAPEL = NINGUÉM PONTUOU!`)
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
        }
    } if (escolhaJogador == 3) {
        switch (escolhaComputador) {
            case 2:
                // usuario ganha
                alert(`Você: TESOURA  //  Computador: PAPEL = VOCÊ PONTUOU!`)
                pontosJogador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            case 1:
                // computador ganha
                alert(`Você: TESOURA  //  Computador: PEDRA = COMPUTADOR PONTUOU!`)
                pontosComputador++;
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
                break;
            default:
                // empate
                alert(`Você: TESOURA  //  Computador: TESOURA = NINGUÉM PONTUOU!`)
                alert(`Pontos: Você = ${pontosJogador}  //  Computador = ${pontosComputador}`)
        }
    }
    // Exibindo o Vencedor e propondo novo jogo
    if (pontosJogador == 2) {
        vencedor = true;
        alert(`O jogo acabou, VOCÊ VENCEU!!!`)
        var jogar = confirm('O Computador está pedindo uma revanche! Jogar novamente?')
        if (jogar == true) {
            location.reload()
        }
    } else if (pontosComputador == 2) {
        vencedor = true;
        alert(`O jogo acabou, O COMPUTADOR VENCEU! ;(`)
        var jogar = confirm('Não acredito que você vai aceitar a derrota! Jogar novamente?')
        if (jogar == true) {
            location.reload()
        }
    }
}

// while (!vencedor) {
//     ponto()

// }




