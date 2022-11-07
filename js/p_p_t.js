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

        // Criando a div Container
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
        imgUsuario.setAttribute('class', 'img')
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
        imgMaquina.setAttribute('class', 'img')
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

        // Alerta de ponto e vitória
        let alertaPonto = document.createElement('a')
        alertaPonto.setAttribute('id', 'alertaponto')
        document.body.appendChild(alertaPonto)

        // Variaveis de pontuação
        let pontosUsuario = 0;
        let pontosMaquina = 0;
        let escolhaJogador = null;

        // Jogador escolhe pedra
        btnPedra.addEventListener('click', () => {
            divEscolhas.style.display = 'none'
            escolhaJogador = 1;
            imgUsuario.setAttribute('src', './img/pedra.jpg')
            setTimeout(ponto, 1000)
        })

        // Jogador escolhe papel
        btnPapel.addEventListener('click', () => {
            divEscolhas.style.display = 'none'
            escolhaJogador = 2;
            imgUsuario.setAttribute('src', './img/papel.jpg')
            setTimeout(ponto, 1000)
        })

        // Jogador escolhe tesoura
        btnTesoura.addEventListener('click', () => {
            divEscolhas.style.display = 'none'
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
                        alertaPonto.innerText = 'Máquina pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    case 3:
                        // Usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        alertaPonto.innerText = 'Você pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    default:
                        //empate
                        alertaPonto.innerText = 'Empatou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                }
            } else if (escolhaJogador == 2) {
                switch (escolhaComputador) {
                    case 1:
                        //usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        alertaPonto.innerText = 'Você pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    case 3:
                        //computador ganha
                        pontosMaquina++;
                        divPtsMaquina.innerText = pontosMaquina
                        alertaPonto.innerText = 'Máquina pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    default:
                        // empate
                        alertaPonto.innerText = 'Empatou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                }
            } if (escolhaJogador == 3) {
                switch (escolhaComputador) {
                    case 2:
                        // usuario ganha
                        pontosUsuario++;
                        divPtsUsuario.innerText = pontosUsuario
                        alertaPonto.innerText = 'Você pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    case 1:
                        // computador ganha
                        pontosMaquina++;
                        divPtsMaquina.innerText = pontosMaquina
                        alertaPonto.innerText = 'Máquina pontuou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                        break;
                    default:
                        // empate
                        alertaPonto.innerText = 'Empatou!!'
                        alertaPonto.style.display = 'block'
                        setTimeout(() => alertaPonto.style.display = 'none', 3000)
                }
            }
            // Removendo as imgs
            setTimeout(() => {
                imgMaquina.removeAttribute('src')
                imgUsuario.removeAttribute('src')
                
                if (pontosUsuario == 3) {
                    alertaPonto.style.display = 'block'
                    alertaPonto.innerText = `Parabéns ${inputNome.value}, você ganhou!!`
                    setTimeout(() => location.reload(), 3000)

                } else if (pontosMaquina == 3) {
                    alertaPonto.style.display = 'block'
                    alertaPonto.innerText = `A máquina ganhou! ;(`
                    setTimeout(() => location.reload(), 3000)

                }

                divEscolhas.style.display = 'block'
            }, 3000)

        }
    }
})











