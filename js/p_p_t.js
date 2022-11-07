let inputNome = document.getElementById('nomeusuario')

document.getElementById('btnjogar').addEventListener('click', function jogar() {
    if (inputNome.value.length <= 0) {
        inputNome.style.border = 'solid 2px #ff0000'
    } else {
        //ocultando o form
        document.querySelector('form').style.display = 'none'
        // Gerando o HTML
        // Criando a div Placar
        let divPlacar = document.createElement('div')
        divPlacar.setAttribute('id', 'placar')
        document.body.appendChild(divPlacar)
        // Adicionando os filhos da div Placar
        // card de pontos do usuario
        let divPtsUsuario = document.createElement('div')
        divPtsUsuario.setAttribute('id', 'ptsusuario')
        divPtsUsuario.setAttribute('class', 'cardplacar')
        divPtsUsuario.innerText = '0'
        divPlacar.appendChild(divPtsUsuario)
        // card de versus
        let divVersus = document.createElement('div')
        divVersus.setAttribute('id', 'versus')
        divVersus.setAttribute('class', 'cardplacar')
        divVersus.innerText = 'x'
        divPlacar.appendChild(divVersus)
        // card de pontos da maquina
        let divPtsMaquina = document.createElement('div')
        divPtsMaquina.setAttribute('id', 'ptsmaquina')
        divPtsMaquina.setAttribute('class', 'cardplacar')
        divPtsMaquina.innerText = '0'
        divPlacar.appendChild(divPtsMaquina)

        // Criando a div Conatiner
        let divContainer = document.createElement('div')
        divContainer.setAttribute('id', 'container')
        document.body.appendChild(divContainer)
        // Adicionando os filhos da div container (Usuario)
        let divUsuario = document.createElement('div')
        divUsuario.setAttribute('id', 'usuario')
        divUsuario.setAttribute('class', 'cardjogador')
        divContainer.appendChild(divUsuario)
        // Adicionando o h3 e a img ao card
        let nomeUsuario = document.createElement('h3')
        nomeUsuario.innerText = inputNome.value
        let imgUsuario = document.createElement('img')
        divUsuario.appendChild(nomeUsuario)
        divUsuario.appendChild(imgUsuario)

        // Adicionando os filhos da div container (Maquina)
        let divMaquina = document.createElement('div')
        divMaquina.setAttribute('id', 'maquina')
        divMaquina.setAttribute('class', 'cardjogador')
        divContainer.appendChild(divMaquina)
        // Adicionando o h3 e a img ao card
        let nomeMaquina = document.createElement('h3')
        nomeMaquina.innerText = 'Máquina'
        let imgMaquina = document.createElement('img')
        divMaquina.appendChild(nomeMaquina)
        divMaquina.appendChild(imgMaquina)

        // Criando a div Escolhas
        let divEscolhas = document.createElement('div')
        divEscolhas.setAttribute('id', 'escolhas')
        document.body.appendChild(divEscolhas)
        // Adicionando os filhos da div Escolhas
        // botao pedra
        let btnPedra = document.createElement('input')
        btnPedra.setAttribute('type', 'button')
        btnPedra.setAttribute('value', 'Pedra')
        btnPedra.setAttribute('id', 'btnpedra')
        btnPedra.setAttribute('class', 'btns')
        divEscolhas.appendChild(btnPedra)
        //botao papel
        let btnPapel = document.createElement('input')
        btnPapel.setAttribute('type', 'button')
        btnPapel.setAttribute('value', 'Papel')
        btnPapel.setAttribute('id', 'btnpapel')
        btnPapel.setAttribute('class', 'btns')
        divEscolhas.appendChild(btnPapel)
        // botao tesoura
        let btnTesoura = document.createElement('input')
        btnTesoura.setAttribute('type', 'button')
        btnTesoura.setAttribute('value', 'Tesoura')
        btnTesoura.setAttribute('id', 'btntesoura')
        btnTesoura.setAttribute('class', 'btns')
        divEscolhas.appendChild(btnTesoura)

        // Variaveis de pontuação
        let pontosUsuario = 0;
        let pontosMaquina = 0;
        let vencedor = false;
        let escolhaJogador = null;

        // Jogador escolhe pedra
        btnPedra.addEventListener('click', () => {
            escolhaJogador = 1;
            imgUsuario.setAttribute('src', './img/pedra.jpg')
            setTimeout(ponto, 1000)
        })

        // Jogador escolhe papel
        btnPapel.addEventListener('click', () => {
            escolhaJogador = 2;
            imgUsuario.setAttribute('src', './img/papel.jpg')
            setTimeout(ponto, 1000)
        })

        // Jogador escolhe tesoura
        btnTesoura.addEventListener('click', () => {
            escolhaJogador = 3;
            imgUsuario.setAttribute('src', './img/tesoura.png')
            setTimeout(ponto, 1000)
        })


        // Verificando o pontuador
        function ponto() {
            // Criando a escolha do computador
            function numAleatorio(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
            }
            var escolhaComputador = numAleatorio(1, 4)

            // Trocando a img da maquina
            if (escolhaComputador == 1) {
                imgMaquina.setAttribute('src', './img/pedra.jpg')

            } else if (escolhaComputador == 2) {
                imgMaquina.setAttribute('src', './img/papel.jpg')

            } else {
                imgMaquina.setAttribute('src', './img/tesoura.png')
            }

            // Definindo o pontuador
            if (escolhaJogador == 1) {
                switch (escolhaComputador) {
                    case 2:
                        //computador ganha
                        pontosMaquina++;
                        divPtsMaquina.innerText = pontosMaquina
                        break;
                    case 3:
                        // Usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        break;
                    default:
                    //empate
                }
            } else if (escolhaJogador == 2) {
                switch (escolhaComputador) {
                    case 1:
                        //usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        break;
                    case 3:
                        //computador ganha
                        pontosMaquina++;
                        divPtsMaquina.innerText = pontosMaquina
                        break;
                    default:
                    // empate

                }
            } if (escolhaJogador == 3) {
                switch (escolhaComputador) {
                    case 2:
                        // usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        break;
                    case 1:
                        // computador ganha
                        pontosMaquina++;
                        divPtsMaquina.innerText = pontosMaquina
                        break;
                    default:
                    // empate

                }
            }
            // Removendo as imgs
            setTimeout(() => {
                imgMaquina.removeAttribute('src')
                imgUsuario.removeAttribute('src')
                if (pontosUsuario == 3) {
                    vencedor = true;
                    location.reload()

                } else if (pontosMaquina == 3) {
                    vencedor = true;
                    location.reload()

                }
            }, 3000)

        }
    }
})











